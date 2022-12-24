import { getCurrentInstance, ref, watch } from 'vue'
import { useClipboard } from '@vueuse/core'
import { isDark } from '~/composables/dark'
export const getCssVarName = (namespace: string, type: string) => {
  return type ? `--docs-${namespace}-${type}` : `--docs-${namespace}`
}

/**
 * get css var value by css var name
 * @param name
 * @returns
 */
export const getCssVarValue = (name: string) => {
  const val = ref(
    getComputedStyle(document.documentElement).getPropertyValue(name)
  )
  watch(
    () => isDark.value,
    () => {
      setTimeout(() => {
        val.value = getComputedStyle(document.documentElement).getPropertyValue(
          name
        )
      }, 100)
    }
  )
  return val
}

export const getColorValue = (type: string) => {
  const color = getComputedStyle(document.documentElement).getPropertyValue(
    `--docs-color-${type}`
  )
  return color
}

// copy color

export const useCopyColor = () => {
  const source = ref('')
  const { copy, isSupported } = useClipboard({ source })

  const vm = getCurrentInstance()!
  const copyColor = async (colorType: string) => {
    const colorValue = getColorValue(colorType)
    source.value = colorValue
    // const { $message } = vm.appContext.config.globalProperties
    if (!isSupported) {
      window.alert('Copy failed')
    }
    try {
      await copy()
      window.alert(`--docs-color-${colorType}: ${source.value}`)
    } catch (e: any) {
      window.alert(e.message)
    }
  }

  return {
    copyColor,
  }
}
