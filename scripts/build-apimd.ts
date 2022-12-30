import fs from 'fs/promises'
import path from 'path'
import { compRoot, mdcRoot } from '@omd-design-plus/build-utils'
import consola from 'consola'
import chalk from 'chalk'

const headerMap = {
  props: {
    header: `| Name | Description | Type | Default | Required |
| -- | -- | -- | -- | -- |`,
    cont: (name: string, config: any) =>
      `| ${name} | ${config.description || '-'} | ${
        config.type.name || '-'
      } | ${
        config.default
          ? config.type === Object || config.type === Array
            ? JSON.stringify(config.default())
            : config.default
          : '-'
      } | ${config.required || 'false'} |`,
  },
  events: {
    header: `| Name | Description | Type |
| -- | -- | -- |`,
    cont: (name: string, config: any) =>
      `| ${name} | ${config.description || '-'} | ^[Function] ${
        config.type || '-'
      } |`,
  },
  slots: {
    header: `| Name | Description |
| -- | -- |`,
    cont: (name: string, config: any) =>
      `| ${name} | ${config.description || '-'} |`,
  },
}

type BuildType = 'props' | 'events' | 'slots'

function genTable(type: BuildType, source: any) {
  let tableH = headerMap[type].header
  const res = [tableH]
  let tableC = headerMap[type].cont
  for (let item in source) {
    const name = item
    const config = source[item]
    res.push(tableC(name, config))
  }
  return res.join('\n')
}

async function main() {
  const threshold = process.env.THRESHOLD || 40
  const componentName = process.argv[2]
  if (!componentName) return console.error('输入组件名称再操作')
  let output: string
  const diffOutput = require(path.resolve(
    compRoot,
    componentName,
    'src',
    componentName + '.ts'
  ))
  const prefix = componentName.replace(/\-(\w)/, ($0, $1) => $1.toUpperCase())
  const propsText = genTable('props', diffOutput[`_${prefix}Props`])
  const eventsText = genTable('events', diffOutput[`_${prefix}Events`])
  const slotsText = genTable('slots', diffOutput[`_${prefix}Slots`])
  const text = `## ${componentName} API

### ${componentName} Props
${propsText}
### ${componentName} Events
${eventsText}
### ${componentName} Slots
${slotsText}
`
  const pathApi = path.resolve(mdcRoot, componentName, 'api.md')
  await fs.writeFile(pathApi, text)
  consola.log(chalk.cyan(`api md done, ${pathApi}`))
}

main()
