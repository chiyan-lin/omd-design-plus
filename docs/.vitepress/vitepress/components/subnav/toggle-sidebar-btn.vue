<script lang="ts" setup>
import ToggleButton from '../icons/toggle-button.vue'
</script>

<template>
  <div class="sidebar-button flex items-center">
    <div :size="20" class="mr-2">
      <ToggleButton />
    </div>
    <span class="leading-6">菜单</span>
  </div>
</template>

<style>
.sidebar-button {
  cursor: pointer;
  color: var(--text-color);
}

.sidebar-button .icon {
  display: block;
  width: 1.25rem;
  height: 1.25rem;
}

/* @media screen and (max-width: 1044px) {
  .sidebar-button {
    display: block;
  }
} */
</style>
