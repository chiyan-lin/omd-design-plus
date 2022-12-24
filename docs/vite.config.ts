import path from 'path'
import Inspect from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {
  docPackage,
  epPackage,
  getPackageDependencies,
  projRoot,
} from '@omd-design-plus/build-utils'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
  },
  {
    find: /^omd-design-plus(\/(es|lib))?$/,
    replacement: path.resolve(projRoot, 'packages/omd-design-plus/index.ts'),
  },
  {
    find: /^omd-design-plus\/(es|lib)\/(.*)$/,
    replacement: `${path.resolve(projRoot, 'packages')}/$2`,
  },
]

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  const { dependencies: epDeps } = getPackageDependencies(epPackage)
  const { dependencies: docsDeps } = getPackageDependencies(docPackage)

  const optimizeDeps = [...new Set([...epDeps, ...docsDeps])].filter(
    (dep) => !dep.startsWith('@types/') && !['omd-design-plus'].includes(dep)
  )

  optimizeDeps.push(
    ...(await glob(['dayjs/plugin/*.js'], {
      cwd: path.resolve(projRoot, 'node_modules'),
      onlyFiles: true,
    }))
  )

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      port: 4567,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
      Components({
        dirs: ['.vitepress/vitepress/components'],
        allowOverrides: true,
        resolvers: [IconsResolver()],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),
      UnoCSS(),
      MarkdownTransform(),
      Inspect(),
      mkcert(),
    ],
    optimizeDeps: {
      include: optimizeDeps,
    },
  }
})
