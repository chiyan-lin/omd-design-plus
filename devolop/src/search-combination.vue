<!--
 * @Author: chiyan-lin 540194785@qq.com
 * @Date: 2022-12-13 23:52:23
 * @LastEditors: chiyan-lin 540194785@qq.com
 * @LastEditTime: 2022-12-14 00:04:58
 * @FilePath: /omd-design-plus/devolop/src/search-combination.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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
