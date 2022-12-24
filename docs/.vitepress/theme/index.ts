import OmdDesignPlus from 'omd-design-plus'
import Antd from 'ant-design-vue'
import 'omd-design-plus/index.scss'
import 'ant-design-vue/dist/antd.css'
import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(OmdDesignPlus)
    app.use(Antd)
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
