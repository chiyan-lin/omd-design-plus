<script setup lang="ts">
import { computed } from 'vue'
import VpLink from '../common/vp-link.vue'

const props = defineProps<{ id: string }>()
</script>

<template>
  <div class="mb-4">
    <div class="flex flex-wrap gap-4 pt-2" />
  </div>
</template>

<style lang="scss" scoped>
.link {
  color: var(--text-color-light);

  &:hover {
    color: var(--brand-color);
  }
}
</style>
