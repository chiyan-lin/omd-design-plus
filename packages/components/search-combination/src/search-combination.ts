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

export const searchCombinationProps = refactorProps({
  /**
   * @description 搜索项数组
   */
  searchConditions: {
    type: Array as PropType<SearchConditionsItem[]>,
    required: true,
  },
  /**
   * @description  针对单个field处理
   */
  valueRender: {
    type: Function,
  },
  /**
   * @description  针对所有field处理, 如果valueRender与paramsRender同时存在，以valueRender为准
   */
  paramsRender: {
    type: Function,
  },
  /**
   * @description  默认搜索项
   */
  defaultSearch: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @description  是否展开
   */
  collapse: {
    type: Boolean,
    default: true,
  },
  /**
   * @description  隐藏模式下，展示的条数
   */
  miniCount: {
    type: Number,
    default: 7,
  },
  /**
   * @description  每行显示几个条件
   */
  rowCount: {
    type: Number,
    default: 7,
  },
  /**
   * @description  是否立即搜索
   */
  searchImediately: {
    type: Boolean,
    default: false,
  },
  /**
   * @description  隐藏模式下，展示的条数
   */
  labelCol: {
    type: Object,
    default: () => ({ span: 8 }),
  },
  /**
   * @description  隐藏模式下，展示的条数
   */
  wrapperCol: {
    type: Object,
    default: () => ({ span: 16 }),
  },

  // type: {
  //   type: String,
  //   values: ['primary', 'success', 'warning', 'info', 'danger'],
  //   default: 'danger',
  // },
} as const)

export type SearchCombinationProps = ExtractPropTypes<
  typeof searchCombinationProps
>
