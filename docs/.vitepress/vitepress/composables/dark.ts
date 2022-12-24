import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'omd-desigin-plus-docs-theme',
})

export const toggleDark = useToggle(isDark)
