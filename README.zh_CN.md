# advanced-antd

[English](./README.md) · 中文

## 概要 <br>

ScrollTable:
根据页面布局自动调整表格的 scroll-y 属性。

## 样例

 https://jilangyangbo.github.io/advanced-antd/

## 安装

```
npm install advanced-antd  or  pnpm install advanced-antd or yarn add advanced-antd
```

## 使用

只需用advanced-antd中ScrollTable代替antd中的Table组件即可。

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

## 属性

 ScrollTable: 
 包含原生antd Table的所有属性以及自由属性
 ### 自由属性
| 属性名  | 默认值  | 类型 | 描述 |
| :------------ |:---------------:| :---------------:| :-----|
| bottomHeight | 74 | `number` |  表格距离屏幕底部的距离, 默认底部有74px高的分页组件 |
