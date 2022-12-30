import { refactorProps } from '@omd-design-plus/utils'
import type { ExtractPropTypes, PropType } from 'vue'
export interface SearchConditionsItem {
  is?: string
  value: string
  slot: any
  label: string
  labelCol: object
  wrapperCol: object
  props?: object
  on?: Function
}

export const _searchCombinationProps = {
  searchConditions: {
    description: '搜索项数组',
    type: Array as PropType<SearchConditionsItem[]>,
    required: true,
  },
  valueRender: {
    description: '针对单个field处理',
    type: Function,
  },
  paramsRender: {
    description:
      '针对所有field处理, 如果valueRender与paramsRender同时存在，以valueRender为准',
    type: Function,
  },
  defaultSearch: {
    description: '默认搜索项',
    type: Object,
    default: () => ({}),
  },
  collapse: {
    description: '是否展开',
    type: Boolean,
    default: true,
  },
  miniCount: {
    description: ' 隐藏模式下，展示的条数',
    type: Number,
    default: 7,
  },
  rowCount: {
    description: ' 每行显示几个条件',
    type: Number,
    default: 7,
  },
  searchImediately: {
    description: '是否立即搜索',
    type: Boolean,
    default: false,
  },
  labelCol: {
    description: 'ant labelCol 配置',
    type: Object,
    default: () => ({ span: 8 }),
  },
  wrapperCol: {
    description: 'ant wrapperCol 配置',
    type: Object,
    default: () => ({ span: 16 }),
  },
  // type: {
  //   type: step,
  //   values: ['1', '2', '3', '4', '5'],
  //   default: '1',
  // },
}

export const _searchCombinationEvents = {
  search: {
    description: '点击搜索回调',
    type: '(params: [searchConditions对应输入的值]) => void',
  },
  clearSearch: {
    description: '点击清空回调',
    type: '_ => void',
  },
  ready: {
    description: '组件onMounted回调',
    type: '_ => void',
  },
  change: {
    description: '用户操作回调',
    type: '(params: [searchConditions对应输入的值]) => void',
  },
}

export const _searchCombinationSlots = {
  'search-btns': {
    description: '操作块',
  },
}

export const searchCombinationEvents = Object.keys(_searchCombinationEvents)

export const searchCombinationSlots = Object.keys(_searchCombinationSlots)

export const searchCombinationProps = refactorProps(_searchCombinationProps)

export type SearchCombinationProps = ExtractPropTypes<
  typeof searchCombinationProps
>
