import installer from './defaults'
export * from '@omd-design-plus/components'
export * from '@omd-design-plus/constants'
export * from '@omd-design-plus/directives'
export * from '@omd-design-plus/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
