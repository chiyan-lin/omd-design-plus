// For this project development
import '@vue/runtime-core'

declare module '*.vue' {
  import Vue, { VNode } from 'vue'
  export default Vue
}

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    OmdSearchCombination: typeof import('../packages/omd-design-plus')['OmdSearchCombination']
  }
}

export {}
