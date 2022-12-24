<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href?: string
  noIcon?: boolean
}>()

const isExternal = computed(() => props.href && /^[a-z]+:/i.test(props.href))
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    class="link-item"
    :class="{ link: href }"
    :href="href"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
    <div v-if="isExternal && !noIcon">
      <i-ri-external-link-line class="link-icon" />
    </div>
  </component>
</template>

<style scoped>
.link-item {
  display: flex;
  align-items: center;
}
</style>
