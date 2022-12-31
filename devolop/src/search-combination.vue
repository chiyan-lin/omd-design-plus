<template>
  <OmdSearchCombination :value="123">12312</OmdSearchCombination>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import OmdSearchCombination from '../../packages/components/search-combination/src/search-combination.vue'

onMounted(() => {})
</script>

<style lang="scss">
// 引入全部css
@use '../../packages/components/search-combination/src/search-combination.scss';
</style>
