---
title: Local Development

---

# Local Development

## Bootstrap project

With command

```shell
pnpm i
```

the project will install all dependencies.

## Website preview

With command

```shell
pnpm docs:dev
```

the project will launch website for you to preview all existing component.

## Local development

See [Local development guide](https://github.com/omd-design-plus/omd-design-plus/blob/dev/CONTRIBUTING.md)

1. With command

```shell
pnpm dev
```

will start the local development environment.

2. Add your component into `play/src/App.vue`

> App.vue

```vue
<template>
  <ComponentYouAreDeveloping />
</template>

<script setup lang="ts">
// make sure this component is registered in @omd-design-plus/components
import { ComponentYouAreDeveloping } from '@omd-design-plus/components'
</script>
```

Modify `App.vue` file per your needs to get things work.
