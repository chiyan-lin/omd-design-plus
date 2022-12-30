## search-combination API

### search-combination Props
| Name | Description | Type | Default | Required |
| -- | -- | -- | -- | -- |
| searchConditions | 搜索项数组 | Array | - | true |
| valueRender | 针对单个field处理 | Function | - | false |
| paramsRender | 针对所有field处理, 如果valueRender与paramsRender同时存在，以valueRender为准 | Function | - | false |
| defaultSearch | 默认搜索项 | Object | {} | false |
| collapse | 是否展开 | Boolean | true | false |
| miniCount |  隐藏模式下，展示的条数 | Number | 7 | false |
| rowCount |  每行显示几个条件 | Number | 7 | false |
| searchImediately | 是否立即搜索 | Boolean | - | false |
| labelCol | ant labelCol 配置 | Object | {"span":8} | false |
| wrapperCol | ant wrapperCol 配置 | Object | {"span":16} | false |
### search-combination Events
| Name | Description | Type |
| -- | -- | -- |
| search | 点击搜索回调 | ^[Function] (params: [searchConditions对应输入的值]) => void |
| clearSearch | 点击清空回调 | ^[Function] _ => void |
| ready | 组件onMounted回调 | ^[Function] _ => void |
| change | 用户操作回调 | ^[Function] (params: [searchConditions对应输入的值]) => void |
### search-combination Slots
| Name | Description |
| -- | -- |
| search-btns | 操作块 |
