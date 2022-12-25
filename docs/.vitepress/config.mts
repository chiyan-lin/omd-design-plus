import consola from 'consola'
import { REPO_BRANCH, REPO_PATH } from '@omd-design-plus/build-const'
import { docsDirName } from '@omd-design-plus/build-utils'
// import { languages } from './utils/lang'
import { features, head, mdPlugin, nav, sidebars } from './config'
import type { UserConfig } from 'vitepress'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

consola.debug(`DOC_ENV: ${process.env.DOC_ENV}`)

export const config: UserConfig = {
  title: 'Omd Design Plus',
  description: 'Omd Design Plus',
  lastUpdated: true,
  // base: 'omd-design-plus',
  head,
  themeConfig: {
    repo: REPO_PATH,
    docsBranch: REPO_BRANCH,
    docsDir: docsDirName,
    editLinks: false,
    lastUpdated: '最后更新',
    logo: '/images/omd-design-plus-logo.svg',
    logoSmall: '/images/omd-design-plus-logo-small.svg',
    sidebars,
    nav,
    features,
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
  vue: {
    template: {
      ssr: true,
      compilerOptions: {
        directiveTransforms: buildTransformers(),
      },
    },
  },
}

export default config
