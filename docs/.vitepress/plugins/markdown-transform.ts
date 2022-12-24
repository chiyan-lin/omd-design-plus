import fs from 'fs'
import path from 'path'
import glob from 'fast-glob'
import { docRoot, docsDirName, projRoot } from '@omd-design-plus/build-utils'
import { REPO_BRANCH, REPO_PATH } from '@omd-design-plus/build-const'

import type { Plugin } from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const componentId = path.basename(id, '.md')
      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('./${componentId}/*.vue')`,
        ],
      }

      code = transformVpScriptSetup(code, append)

      const pattern = `docs/component`
      const compPaths = await glob(pattern, {
        cwd: docRoot,
        absolute: true,
        onlyDirectories: true,
      })
      if (compPaths.some((compPath) => id.startsWith(compPath))) {
        code = transformComponentMarkdown(id, componentId, code, append)
      }

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
    },
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[],
  footers: string[]
) => {
  const frontmatterEnds = code.indexOf('---\n\n') + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}

const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/

const transformVpScriptSetup = (code: string, append: Append) => {
  const matches = code.match(vpScriptSetupRE)
  if (matches) code = code.replace(matches[0], '')
  const scriptSetup = matches?.[3] ?? ''
  if (scriptSetup) append.scriptSetups.push(scriptSetup)
  return code
}

const GITHUB_BLOB_URL = `https://github.com/${REPO_PATH}/blob/${REPO_BRANCH}`
const GITHUB_TREE_URL = `https://github.com/${REPO_PATH}/tree/${REPO_BRANCH}`
const transformComponentMarkdown = (
  id: string,
  componentId: string,
  code: string,
  append: Append
) => {
  const docUrl = `${GITHUB_BLOB_URL}/${docsDirName}/component/${componentId}.md`
  const componentUrl = `${GITHUB_TREE_URL}/packages/components/${componentId}`
  const componentPath = path.resolve(
    projRoot,
    `packages/components/${componentId}`
  )
  const isComponent = fs.existsSync(componentPath)

  const links = [['Dosc', docUrl]]
  if (isComponent) links.unshift(['组件', componentUrl])
  const linksText = links
    .filter((i) => i)
    .map(([text, link]) => `[${text}](${link})`)
    .join(' • ')

  const sourceSection = `
## 源码

${linksText}
`

  const contributorsSection = `
## 贡献

<Contributors id="${componentId}" />
`

  append.footers.push(sourceSection, isComponent ? contributorsSection : '')

  return code
}
