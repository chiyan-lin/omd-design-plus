import { computed, getCurrentInstance } from 'vue'
import type { ComputedRef } from 'vue'
// export const useProp: <T>(name: string) => ComputedRef<T | undefined>

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()
  return computed(() => {
    const vmProxy = vm?.proxy
    let propsItem: any = undefined
    if (vmProxy === null) {
      propsItem = undefined
    } else {
      propsItem = (vmProxy?.$props as any)[name]
    }
    return propsItem !== null ? propsItem : undefined
  })
}
