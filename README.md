# advanced-antd

 English · [中文](./README.zh_CN.md)

## Summary <br>

ScrollTable:
Automatically adjust the scroll-y attribute of the table based on page layout.

## Example

 https://jilangyangbo.github.io/advanced-antd/

## Install

```
npm install advanced-antd  or  pnpm install advanced-antd or yarn add advanced-antd
```

## Usage

Just need to replace the native antd Table component with ScrollTable from advanced-antd.

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

## Props

 ScrollTable: 
 Includes all the props of antd Table component.
 ### additional props
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| bottomHeight | 74 | `number` |  The distance between the table content and the bottom of the screen, such as the height of a pagenation or other component, the default value is 74 |
