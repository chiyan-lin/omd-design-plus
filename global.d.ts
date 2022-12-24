// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElAffix: typeof import('omd-design-plus')['ElAffix']
  }
}

export {}
