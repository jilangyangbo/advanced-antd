# advanced-antd

 English · [中文](./README.zh_CN.md)

## Summary <br>

### ScrollTable:

Automatically adjust the scroll-y attribute of the table based on page layout.

### DragModal:

The DragModal component is a secondary encapsulation based on the antd Modal component, which can achieve drag and drop pop ups.

## Example

 https://jilangyangbo.github.io/advanced-antd/

## Install

```
npm install advanced-antd  or  pnpm install advanced-antd or yarn add advanced-antd
```

## Usage

### ScrollTable:

The usage is similar to antd's Table

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

The usage is  similar to antd's Modal

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

## Props

 ### ScrollTable: 
 Includes all the props of antd Table component.
 #### additional props
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| bottomHeight | 74 | `number` |  The distance between the table content and the bottom of the screen, such as the height of a pagenation or other component, the default value is 74 |
| minHeight | 60 | `number` |   The minimum height of the table content, which is used to prevent the table content from being too small, and the default value is 60 |

 ### DragModal: 
 Includes all the props of antd Modal component.
 #### additional props
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| dragable | true | `boolean` |  Whether to enable drag and drop |
| resetOnClose | false | `boolean` | Whether to reset the position of the modal when it is closed |
