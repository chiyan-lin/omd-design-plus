<template>
  <div class="play">
    <h1>Omd Design Plus 开发页</h1>
    <component v-if="componentIdRef" :is="componentIdRef"></component>
    <template v-else>
      <h5>
        点击下面地址跳转到对应的开发组件，新增组件在 src 目录下新建开发页面
      </h5>
      <div class="play-container">
        <a v-for="c in componentListRef" :key="c" :href="'/' + c">{{ c }}</a>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const componentListRef = ref<Array<string>>([])
const componentIdRef = ref<any>(null)

onMounted(async () => {
  const componentName = window.location.pathname.slice(1)
  console.log('componentName', componentName)
  // @ts-ignore
  const apps = import.meta.glob(`./src/*.vue`)
  const appsKeys = Object.keys(apps)
  const componentList = appsKeys.map((item) => {
    const rsp = item.match(/(?<=\.\/src\/)[\w|\W]+(?=\.vue)/g)
    return rsp === null ? '' : rsp[0]
  })
  componentListRef.value = componentList
  // console.log('apps', apps, apps[`./src/${componentName}.vue`])
  const componentId = (await apps[`./src/${componentName}.vue`]()).default
  componentIdRef.value = componentId
})
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  #play {
    height: 100%;
    width: 100%;
    .play {
      height: 100%;
      width: 100%;
      text-align: center;
    }
    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
