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

function buildComponent() {
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

function buildAll() {
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

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

export const buildCss = series(buildComponent, buildAll)
