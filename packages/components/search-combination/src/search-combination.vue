<template>
  <div :class="ns.b()">
    <div :class="ns.e('content')">
      <a-form :class="ns.e('form')">
        <a-row :class="ns.e('row')" type="flex">
          <a-col
            v-for="(sc, index) in searchConditions"
            v-show="!(hide && index >= showCount)"
            :key="`key-${index}-${sc.value}`"
            :style="{ width: colWidth + '%' }"
          >
            <a-form-item
              :labelCol="sc.labelCol || labelCol"
              :wrapperCol="sc.wrapperCol || wrapperCol"
              :label="sc.label"
            >
              <template v-if="sc.slot">
                <slot :name="sc.slot" :config="sc" :searchForm="form"></slot>
              </template>
              <component
                v-else-if="sc.is"
                :is="sc.is"
                v-model:value="form[sc.value]"
                v-bind="Object.assign({ placeholder: sc.label }, sc.props)"
                :getPopupContainer="triggerFn"
                v-on="sc.on"
              >
              </component>
              <template v-else>
                <a-tooltip
                  placement="bottomLeft"
                  overlayClassName="nameTooltipClass"
                  :getPopupContainer="triggerFn"
                >
                  <template v-if="form[sc.value]" #title>
                    <span>{{ form[sc.value] }}</span>
                  </template>
                  <a-input
                    v-model:value="form[sc.value]"
                    :allow-clear="true"
                    placeholder="多值以英文,;或空格分隔"
                  ></a-input>
                </a-tooltip>
              </template>
            </a-form-item>
          </a-col>
          <a-col
            v-for="item in placeholderItem"
            :key="item"
            :style="{ width: colWidth + '%', height: '39px' }"
          >
          </a-col>
          <template v-if="showBtnCol">
            <a-col :style="{ width: colWidth + '%' }">
              <slot name="search-btns">
                <div
                  :class="ns.e('button')"
                  v-if="!searchImediately"
                  :style="{ marginLeft: `${(labelCol.span / 24) * 100}%` }"
                >
                  <a-button type="primary" @click="doSearch">搜索</a-button>
                  <a-button style="margin-left: 10px" @click="clearSearch"
                    >清空</a-button
                  >
                </div>
              </slot>
            </a-col>
          </template>
        </a-row>
      </a-form>
      <div :class="ns.e('collapse')" @click="hide = !hide" v-if="showCollapse">
        <div :class="ns.e('line')"></div>
        <div :class="ns.e('text')">
          {{ hide ? '高级搜索' : '收起' }}
          <double-left-outlined :class="hide ? 'down' : 'up'" />
        </div>
      </div>
    </div>
    <div v-if="isHasOperation" :class="ns.e('operations')">
      <slot name="operations"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  computed,
  watch,
  useSlots,
} from 'vue'
import _ from 'lodash'
import { DoubleLeftOutlined } from '@ant-design/icons-vue'
import { useNamespace } from '@omd-design-plus/hooks'
import {
  searchCombinationProps,
  searchCombinationEvents,
} from './search-combination'

export default defineComponent({
  name: 'OmdSearchCombination',
  components: {
    DoubleLeftOutlined,
  },
  props: searchCombinationProps,
  emits: searchCombinationEvents,
  setup(props, { emit, slots }) {
    // 是否隐藏
    const hide = ref()
    // 表单数据
    const form = reactive<{ [k: string | number]: any }>({})
    const debounceTimer = ref()
    const mediaType = ref('xl')
    // 实际每行显示的条件数
    const realRowCount = computed(() => {
      if (mediaType.value === 'xxl') {
        return props.rowCount
      }
      if (mediaType.value === 'xl') {
        if (100 / 3 > 100 / props.rowCount) {
          return 3
        }
        return props.rowCount
      }
      return 2
    })
    // 计算col宽度
    const colWidth = computed(() => {
      if (mediaType.value === 'xxl') {
        return 100 / props.rowCount
      }
      if (mediaType.value === 'xl') {
        return Math.max(100 / props.rowCount, 100 / 3)
      }
      return 50
    })
    // 要填充的item
    const placeholderItem = computed(() => {
      if (!showBtnCol.value) {
        return []
      }
      const num =
        realRowCount.value -
        ((hide.value
          ? Math.min(showCount.value, (props.searchConditions as any).length)
          : (props.searchConditions as any).length) %
          realRowCount.value) -
        1
      return [...Array(num).keys()]
    })
    // 实际要显示的条件数
    const showCount = computed(() => {
      return props.searchImediately ? props.miniCount + 1 : props.miniCount
    })
    const showCollapse = computed(() => {
      return (props.searchConditions as any).length > props.miniCount
    })
    // 是否显示搜索按钮
    const showBtnCol = computed(() => {
      return !props.searchImediately || slots['search-btns']
    })
    watch(form, (newVal) => {
      if (props.searchImediately) {
        searchDebounce()
      }
      emit('change', getSearchParams())
    })
    // 查询clientWidth
    const getMediaType = () => {
      const clientWidth = document.documentElement.clientWidth
      mediaType.value = 'default'
      if (clientWidth >= 1200) mediaType.value = 'xl'
      if (clientWidth >= 1600) mediaType.value = 'xxl'
    }
    const clear = () => {
      Object.keys(form).map((key) => {
        delete form[key]
      })
    }
    // // 初始化表单
    const initForm = () => {
      const formd: any = {}
      _.forEach(props.searchConditions, (sc, index: number) => {
        formd[sc.value] = _.cloneDeep(_.get(props.defaultSearch, sc.value))
        if (formd[sc.value] && index >= props.miniCount) {
          // 如果default存在于折叠区，展开
          hide.value = false
        }
      })
      // 先删除form的所有属性
      clear()
      _.forEach(formd, (value, key) => {
        form[key] = value
      })
    }
    const resetForm = () => {
      let formd: any = {}
      _.forEach(props.searchConditions, (sc) => {
        formd[sc.value] = form[sc.value]
      })
      _.forEach(formd, (value, key) => {
        form[key] = value
      })
    }
    watch(
      () => props.searchConditions,
      () => {
        resetForm()
      }
    )
    watch(
      () => props.defaultSearch,
      () => {
        initForm()
      }
    )
    // 获取查询参数 todo
    const getSearchParams = () => {
      let params: any = {}
      _.forEach(form, (val, key) => {
        // 布尔值直接通过
        if (_.isBoolean(val) || (val && !_.isEmpty(val)) || _.isNumber(val)) {
          params[key] = val
        }
      })
      if (_.isFunction(props.valueRender)) {
        params = _.mapValues(
          params,
          (value, key) => props.valueRender && props.valueRender(value, key)
        )
      } else if (_.isFunction(props.paramsRender)) {
        params = props.paramsRender(params)
      }
      return params
    }
    const searchDebounce = () => {
      // 表单发生变化，立即搜索，增加 300ms 防抖机制
      clearTimeout(debounceTimer.value)
      debounceTimer.value = setTimeout(() => {
        doSearch()
      }, 300)
    }
    // 搜索按钮
    const doSearch = () => {
      emit('search')
    }
    // 清空按钮  todo
    const clearSearch = () => {
      initForm()
      emit('clearSearch')
      doSearch()
    }
    // setup在beforeCreate之前执行，但此时不能获取实例信息。把在created()中执行的代码放在setup()中直接执行
    initForm()
    getMediaType()
    window.addEventListener('resize', _.debounce(getMediaType, 100))
    onMounted(() => {
      hide.value = props.collapse
      emit('ready')
    })
    onUnmounted(() => {
      window.removeEventListener('resize', _.debounce(getMediaType, 100))
    })
    const triggerFn = (triggerNode: Element) => triggerNode.parentNode

    return {
      ns: useNamespace('searchCombination'),
      hide,
      form,
      debounceTimer,
      mediaType,
      realRowCount,
      colWidth,
      placeholderItem,
      showCount,
      showCollapse,
      showBtnCol,
      getMediaType,
      clear,
      initForm,
      resetForm,
      getSearchParams,
      searchDebounce,
      doSearch,
      clearSearch,
      triggerFn,
      isHasOperation: !!useSlots().operations,
    }
  },
})
</script>

<!-- setup 写法
<script lang="ts" setup>
import { useNamespace } from '@omd-design-plus/hooks'
import { searchCombinationProps } from './search-combination'
defineOptions({
  name: 'OmdSearchCombination',
})
const props = defineProps(searchCombinationProps)
const ns = useNamespace('searchCombination')
defineExpose({
  content,
})
</script> -->
