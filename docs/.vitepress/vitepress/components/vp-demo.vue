<script setup lang="ts">
import { computed, getCurrentInstance, toRef } from 'vue'
import { isClient, useClipboard, useToggle } from '@vueuse/core'
import { useLang } from '../composables/lang'
import { useSourceCode } from '../composables/source-code'
import { usePlayground } from '../composables/use-playground'
import Example from './demo/vp-example.vue'
import SourceCode from './demo/vp-source-code.vue'

const props = defineProps<{
  demos: object
  source: string
  path: string
  rawSource: string
  description?: string
}>()

const vm = getCurrentInstance()!

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle()
const demoSourceUrl = useSourceCode(toRef(props, 'path'))

const formatPathDemos = computed(() => {
  const demos = {}
  Object.keys(props.demos).forEach((key) => {
    demos[key.replace('./', '').replace('.vue', '')] = props.demos[key].default
  })

  return demos
})

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const onPlaygroundClick = () => {
  const { link } = usePlayground(props.rawSource)
  if (!isClient) return
  window.open(link)
}

const copyCode = async () => {
  // const { $message } = vm.appContext.config.globalProperties
  if (!isSupported) {
    window.alert('复制出错')
  }
  try {
    await copy()
    window.alert('复制成功')
  } catch (e: any) {
    window.alert(e.message)
  }
}
</script>

<template>
  <ClientOnly>
    <!-- danger here DO NOT USE INLINE SCRIPT TAG -->
    <p text="sm" v-html="decodedDescription" />

    <div class="example">
      <Example :file="path" :demo="formatPathDemos[path]" />

      <ElDivider class="m-0" />

      <div class="op-btns">
        <div :show-arrow="false">
          <div :size="16" class="op-btn">
            <i-ri-flask-line @click="onPlaygroundClick" />
          </div>
        </div>
        <div :show-arrow="false">
          <div :size="16" class="op-btn" @click="copyCode">
            <i-ri-file-copy-line />
          </div>
        </div>
        <div :show-arrow="false">
          <div :size="16" class="op-btn" @click="toggleSourceVisible()">
            <i-ri-code-line />
          </div>
        </div>
      </div>

      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>

      <Transition name="fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)"
        >
          <div :size="16">
            <!-- <CaretTop /> -->
          </div>
          <span>隐藏</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<style scoped lang="scss">
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-base);

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;
    border-top: 1px solid #e0e0e0;

    .icon {
      &:hover {
        color: var(--text-color);
      }
    }

    .op-btn {
      margin: 0 0.5rem;
      cursor: pointer;
      color: var(--text-color-lighter);
      transition: 0.2s;

      &.github a {
        transition: 0.2s;
        color: var(--text-color-lighter);

        &:hover {
          color: var(--text-color);
        }
      }
    }
  }

  &-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    span {
      font-size: 14px;
      margin-left: 10px;
    }

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
