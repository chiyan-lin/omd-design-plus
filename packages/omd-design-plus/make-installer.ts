import { provideGlobalConfig } from '@omd-design-plus/hooks'
import { INSTALLED_KEY } from '@omd-design-plus/constants'
import { version } from './version'
import type { ConfigProviderContext } from '@omd-design-plus/hooks'

import type { App, Plugin } from '@vue/runtime-core'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
