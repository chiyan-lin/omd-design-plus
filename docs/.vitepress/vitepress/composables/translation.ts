// import { computed } from 'vue'
// import { useRoute, useRouter } from 'vitepress'
// import { isClient, useStorage } from '@vueuse/core'
// import { PREFERRED_LANG_KEY } from '../constant'

// export const useTranslation = () => {
//   const route = useRoute()
//   const router = useRouter()
//   const lang = useLang()

//   const languageMap = {
//     'zh-CN': 'English',
//     '': '中文',
//     'es-ES': 'Español',
//     'fr-FR': 'Français',
//     'ja-JP': '日本語',
//   }

//   const helpTranslate = computed(() => '帮手翻译')
//   const langsRef = computed(() => {
//     const currentLang = lang.value

//     // When there is no  in the list, meaning this is the PR preview
//     // so we simply return the current list which contains only zh-CN
//     if (!langs.includes('')) return []
//     const langsCopy = langs.slice(0)
//     langsCopy.splice(langsCopy.indexOf(currentLang), 1)

//     // if current language is not , then  needs to be moved to the head.
//     if (currentLang !== '') {
//       langsCopy.splice(langsCopy.indexOf(''), 1)
//     }

//     return currentLang === '' ? langsCopy : [''].concat(langsCopy)
//   })

//   const language = useStorage(PREFERRED_LANG_KEY, 'zh-CN')

//   const switchLang = (targetLang: string) => {
//     if (lang.value === targetLang) return

//     language.value = targetLang

//     const firstSlash = route.path.indexOf('/', 1)

//     const goTo = `/${targetLang}/${route.path.slice(firstSlash + 1)}`

//     router.go(goTo)

//     if (isClient) {
//       navigator?.serviceWorker.controller?.postMessage({
//         type: 'LANG',
//         lang: targetLang,
//       })
//     }
//   }

//   return {
//     helpTranslate,
//     languageMap,
//     langs: langsRef,
//     lang,
//     switchLang,
//   }
// }
