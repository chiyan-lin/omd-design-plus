import { componentSizeMap } from '@omd-design-plus/constants'

import type { ComponentSize } from '@omd-design-plus/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
