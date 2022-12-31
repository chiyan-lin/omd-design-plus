---
title: 本地开发

---

# 本地开发

## 启动项目


```shell
pnpm i
```

## 文档开发


```shell
pnpm docs:dev
```

## 组件开发

1. 新建组件

```shell
gen xxx
```
生成的组件地址在 `packages/components` 中

2. 在 `devolop/src/xxx.vue`

> App.vue

```vue
<template>
  <xxx></xxx>
</template>

<script setup lang="ts">
import xxx from '../../packages/components/xxx/src/xxx.vue'

onMounted(() => {})
</script>

<style lang="scss">
// 引入全部css
@use '../../packages/components/xxx/src/xxx.scss';
</style>

```
