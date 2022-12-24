import path from 'path'
import chalk from 'chalk'
import { dest, parallel, series, src } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import consola from 'consola'
import { compRoot, epOutput, epRoot } from '@omd-design-plus/build-utils'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(epOutput, 'style')

function buildThemeChalk(scssPath: string) {
  const sass = gulpSass(dartSass)
  // const noElPrefixFile = /(index|base|display)/
  return src(path.resolve(compRoot, '*/src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(
      rename((path) => {
        // console.log('path', path)
        path.dirname = ''
        path.basename = `omd-${path.basename}`
      })
    )
    .pipe(dest(distBundle))
}

function buildAllChalk() {
  const sass = gulpSass(dartSass)
  // const noElPrefixFile = /(index|base|display)/
  return src(path.resolve(epRoot, 'index.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(
      rename((path) => {
        path.dirname = ''
      })
    )
    .pipe(dest(distBundle))
}

/**
 * copy from packages/style/dist to dist/omd-design-plus/style
 */
// export function copyThemeChalkBundle() {
//   return src(path.resolve(__dirname, 'package.json')).pipe(dest(distBundle))
// }

/**
 * copy source file to packages
 */

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

<<<<<<< HEAD
export const buildCss = parallel(series(buildThemeChalk, buildAllChalk))
=======
async function buildFullCss(minify: boolean) {
  const files = await glob(`**/*.scss`, {
    cwd: path.resolve(compRoot),
    absolute: true,
  })
  return Promise.all(
    files.map(async (file) => {
      buildThemeChalk(file)
    })
  )
}

export const build: any = parallel(
  copyThemeChalkSource,
  series(buildThemeChalk, copyThemeChalkBundle)
)

export default build
>>>>>>> be103d3da030120b498b1e6eb6a5e00a8ba46d7a
