<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  link: string
  text: string
}>()
</script>

<template>
  <a
    :href="link"
    :title="text"
    target="_blank"
    rel="noreferrer noopener"
    class="social-link"
  >
    <div v-if="icon" :size="24">
      <component :is="icon" />
    </div>
  </a>
</template>

<style scoped lang="scss">
.social-link {
  color: var(--text-color);
}
</style>
