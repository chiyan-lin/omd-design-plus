---
title: 快速使用

---

# 快速使用

本节将介绍如何在项目中使用

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import OmdDesignPlus from 'omd-design-plus'
import 'omd-design-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(OmdDesignPlus)
app.mount('#app')
```

#### Volar 支持

如果您使用 Volar, 请把 `compilerOptions.types` 加到全局组件类型 `tsconfig.json`.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["omd-design-plus/global"]
  }
}
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

#### 自动导入 <el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">荐</el-tag>

安装 `unplugin-vue-components` 和 `unplugin-auto-import`.

```shell
npm install -D unplugin-vue-components unplugin-auto-import
```

Then add the code below into your `Vite` or `Webpack` config file.

##### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { OmdDesignPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [OmdDesignPlusResolver()],
    }),
    Components({
      resolvers: [OmdDesignPlusResolver()],
    }),
  ],
})
```

##### Webpack

```js
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { OmdDesignPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [OmdDesignPlusResolver()],
    }),
    Components({
      resolvers: [OmdDesignPlusResolver()],
    }),
  ],
}
```

想了解更多打包 ([Rollup](https://rollupjs.org/), [Vue CLI](https://cli.vuejs.org/)) 和配置工具，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install).

### 手动导入

OMD Design Plus 提供了基于 ES Module 开箱即用的 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)。

但是你需要安装 [unplugin-omd-design-plus](https://github.com/omd-design-plus/unplugin-omd-design-plus) 来导入样式

> App.vue

```html
<template>
  <el-button>I am ElButton</el-button>
</template>
<script>
  import { ElButton } from 'omd-design-plus'
  export default {
    components: { ElButton },
  }
</script>
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import OmdDesignPlus from 'unplugin-omd-design-plus/vite'

export default defineConfig({
  // ...
  plugins: [OmdDesignPlus()],
})
```

:::warning

如果您使用 `unplugin-` 并且只使用组件 API，您需要手动导入样式。

栗子:

```ts
import 'omd-design-plus/es/components/message/style/css'
import { ElMessage } from 'omd-design-plus'
```

:::

## 全局配置

在引入 OMD Design Plus 时，可以传入一个包含 size 和 zIndex 属性的全局配置对象。 size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000。

完整引入:

```ts
import { createApp } from 'vue'
import OmdDesignPlus from 'omd-design-plus'
import App from './App.vue'

const app = createApp(App)
app.use(OmdDesignPlus, { size: 'small', zIndex: 3000 })
```

按需引入:

```vue
<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <app />
  </el-config-provider>
</template>

<script>
import { defineComponent } from 'vue'
import { ElConfigProvider } from 'omd-design-plus'

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      zIndex: 3000,
      size: 'small',
    }
  },
})
</script>
```
