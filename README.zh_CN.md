# advanced-antd

[English](./README.md) · 中文

## 概要 <br>

### ScrollTable:

根据页面布局自动调整表格的 scroll-y 属性。

### DragModal:

DragModal组件是基于antd Modal组件的二次封装，实现了弹窗拖拽功能。

## 样例

 https://jilangyangbo.github.io/advanced-antd/

## 安装

```
npm install advanced-antd  or  pnpm install advanced-antd or yarn add advanced-antd
```

## 使用

### ScrollTable:

使用方式和antd的Table类似。

```
import {ScrollTable} from 'advanced-antd'
...

<ScrollTable>
  dataSource={data}
  scroll={{x:true}}
  ...
  bottomHeight={0}
<ScrollTable/>
```

### DragModal:

使用方式和antd的Modal类似。

```
import {ScrollTable} from 'advanced-antd'
...
const [open, setOpen] = useState(false)
...

  <DragModal
    title="Dragable Modal"
    open={open}
    onCancel={()=>setOpen(false)}
    onOk={()=>setOpen(false)}
  >
    content
  </DragModal>
  ```

## 属性

 ### ScrollTable: 
 包含原生antd Table的所有属性以及自有属性。
 #### 自有属性
| 属性名  | 默认值  | 类型 | 描述 |
| :------------ |:---------------:| :---------------:| :-----|
| bottomHeight | 74 | `number` |  表格距离屏幕底部的距离, 默认底部有74px高的分页组件 |
| minHeight | 60 | `number` |  表格内容最小高度, 防止表格上方内容过多导致无法显示表格内容, 默认60px |
| isFullUp | false | `boolean` |  表格内容是否占满视窗。设置为true的话，分页组件将固定到屏幕底部 |

 ### DragModal: 
 包含原生antd Modal的所有属性以及自有属性。
 #### 自有属性
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| dragable | true | `boolean` |  是否打开可拖拽功能，默认打开 |
| resetOnClose | false | `boolean` |  关闭弹窗时是否重置弹窗位置，默认不重置 |
