import Vue, { VNode } from 'vue'

declare module '*.vue' {
  export default Vue
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    OmdSearchCombination: typeof import('omd-design-plus')['OmdSearchCombination']
  }
}

export {}
