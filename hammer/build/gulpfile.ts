import path from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { copy } from 'fs-extra'
import { parallel, series } from 'gulp'
import {
  buildOutput,
  epOutput,
  epPackage,
  projRoot,
} from '@omd-design-plus/build-utils'
import { buildConfig, run, runTask, withTaskName } from './src'
import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

// export const copyFullStyle = async () => {
//   await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
//   await copyFile(
//     path.resolve(epOutput, 'style/index.css'),
//     path.resolve(epOutput, 'dist/index.css')
//   )
// }

const _default: any = series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  parallel(
    // runTask('buildModules'),
    // runTask('buildFullBundle'),
    runTask('buildCss')
    // runTask('generateTypesDefinitions'),
    // runTask('buildHelper')

    // series(
    //   withTaskName('buildThemeChalk', () =>
    //     run('pnpm run -C packages/style build')
    //   ),
    //   copyFullStyle
    // )
  )
  // parallel(copyTypesDefinitions, copyFiles)
)

export default _default

export * from './src'
