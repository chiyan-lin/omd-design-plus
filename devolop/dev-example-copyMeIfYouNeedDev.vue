<template>
  <OmdSearchCombination></OmdSearchCombination>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import OmdSearchCombination from '../../packages/components/search-combination/src/search-combination.vue'

onMounted(() => {})
</script>

<style lang="scss" scoped>
// 引入全部css
@use '../../packages/style/src/index.scss';
</style>
