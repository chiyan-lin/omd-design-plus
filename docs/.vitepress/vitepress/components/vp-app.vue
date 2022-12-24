<script setup lang="ts">
import { onMounted } from 'vue'
import { ElMessageBox } from 'omd-design-plus'
import nprogress from 'nprogress'
import dayjs from 'dayjs'
import { isClient, useStorage, useToggle } from '@vueuse/core'
import { useSidebar } from '../composables/sidebar'
import { useToggleWidgets } from '../composables/toggle-widgets'
import { useLang } from '../composables/lang'
import { breakpoints } from '../constant'
import VPOverlay from './vp-overlay.vue'
import VPNav from './vp-nav.vue'
import VPSubNav from './vp-subnav.vue'
import VPSidebar from './vp-sidebar.vue'
import VPContent from './vp-content.vue'

const USER_PREFER_GITHUB_PAGE = 'USER_PREFER_GITHUB_PAGE'
const [isSidebarOpen, toggleSidebar] = useToggle(false)
const { hasSidebar } = useSidebar()
const lang = useLang()

const mirrorUrl = 'omd-design-plus.gitee.io'
const isMirrorUrl = () => {
  if (!isClient) return
  return window.location.hostname === mirrorUrl
}

useToggleWidgets(isSidebarOpen, () => {
  if (!isClient) return
  if (window.outerWidth >= breakpoints.lg) {
    toggleSidebar(false)
  }
})

const userPrefer = useStorage<boolean | string>(USER_PREFER_GITHUB_PAGE, null)

onMounted(async () => {
  if (!isClient) return
  window.addEventListener(
    'click',
    (e) => {
      const link = (e.target as HTMLElement).closest('a')
      if (!link) return

      const { protocol, hostname, pathname, target } = link
      const currentUrl = window.location
      const extMatch = pathname.match(/\.\w+$/)
      // only intercept inbound links
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== '.html')
      ) {
        e.preventDefault()
        if (pathname !== currentUrl.pathname) {
          nprogress.start()
        }
      }
    },
    { capture: true }
  )

  if (lang.value === '') {
    if (isMirrorUrl()) return

    if (userPrefer.value) {
      // no alert in the next 90 days
      if (
        dayjs
          .unix(Number(userPrefer.value))
          .add(90, 'day')
          .diff(dayjs(), 'day', true) > 0
      )
        return
    }
  }
  // unregister sw
  navigator?.serviceWorker?.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
})
</script>

<template>
  <div class="App">
    <VPOverlay
      class="overlay"
      :show="isSidebarOpen"
      @click="toggleSidebar(false)"
    />
    <VPNav />
    <VPSubNav v-if="hasSidebar" @open-menu="toggleSidebar(true)" />
    <VPSidebar :open="isSidebarOpen" @close="toggleSidebar(false)">
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </VPSidebar>
    <VPContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
    </VPContent>
    <Debug />
  </div>
</template>
