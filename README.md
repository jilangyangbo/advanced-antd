# antdx

## Summary <br>

ScrollTable:
Automatically adjust the scroll-y attribute of the table based on page layout.

## Example

 https://jilangyangbo.github.io/antdx/

## Install

```
npm install antdx  or  pnpm install antdx or yarn add antdx
```

## Usage

Just need to replace the native antd Table component with antdx.

```
import {ScrollTable} from 'antdx'
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
