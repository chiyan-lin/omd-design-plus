import fs from 'fs'
import path from 'path'
import { docRoot } from '@omd-design-plus/build-utils'

export const languages = ['']

export const ensureLang = (lang: string) => `/${lang}`

export const getLang = (id: string) =>
  path.relative(docRoot, id).split(path.sep)[0]
