import * as React from 'react';
import { useState, useRef } from 'react';
// import * as ReactDOM from 'react-dom';

import { ScrollTable, DragModal } from '../../.';
import { Table, Radio, Input, Button, Switch, Space } from 'antd';

const Index = () => {
  const [value, setValue] = React.useState('Table');
  const [open, setOpen] = useState(false);
  const [dragable, setDragable] = useState(true);
  const [isFillUp, setIsFillUp] = useState(false);

  const modalRef = useRef(null);
  const { TextArea } = Input;
  const columns = [
    {
      title: 'No.',
      dataIndex: 'name',
      render: (_: string, __: any, index: number) => index + 1,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const data = [
    { name: 'ZhangSan', age: 32, address: 'New York No. 1 Lake Park' },
    { name: 'Jack', age: 42, address: 'London No. 1 Lake Park' },
    { name: 'Tony', age: 32, address: 'Sidney No. 1 Lake Park' },
    { name: 'Tom', age: 32, address: 'London No. 2 Lake Park' },
    { name: 'Lisi', age: 32, address: 'London No. 3 Lake Park' },
    { name: 'Lisa', age: 32, address: 'London No. 4 Lake Park' },
    { name: 'Lilei', age: 32, address: 'London No. 5 Lake Park' },
    { name: 'Lili', age: 32, address: 'London No. 6 Lake Park' },
    { name: 'Janny', age: 32, address: 'London No. 7 Lake Park' },
    { name: 'Brian', age: 32, address: 'London No. 8 Lake Park' },
    { name: 'Tomas', age: 32, address: 'London No. 9 Lake  Park' },
    { name: 'Wangwu', age: 32, address: 'New York No. 1 Lake Park' },
    { name: 'Jian', age: 42, address: 'London No. 1 Lake Park' },
    { name: 'Peter', age: 32, address: 'Sidney No. 1 Lake Park' },
    { name: 'Lee', age: 32, address: 'London No. 2 Lake Park' },
    { name: 'Luo', age: 32, address: 'London No. 3 Lake Park' },
    { name: 'Ling', age: 32, address: 'London No. 4 Lake Park' },
    { name: 'Sheng', age: 32, address: 'London No. 5 Lake Park' },
    { name: 'Shan', age: 32, address: 'London No. 6 Lake Park' },
    { name: 'Wang', age: 32, address: 'London No. 7 Lake Park' },
    { name: 'Zhang', age: 32, address: 'London No. 8 Lake Park' },
    { name: 'Li', age: 32, address: 'London No. 9 Lake  Park' },
  ];
  const options = [
    { label: 'antd Table', value: 'Table' },
    { label: 'ScrollTable', value: 'ScrollTable' },
  ];
  const onChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: '40px',
            height: '40vh',
          }}
        >
          <div>
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
                console.log('modalRef.current===', modalRef.current);
              }}
            >
              DragModal
            </Button>
            <Space align="center" style={{ marginLeft: 16 }}>
              dragable: <Switch checked={dragable} onChange={setDragable} />
            </Space>
            <TextArea
              rows={13}
              style={{ width: '400px', marginTop: '15px', display: 'block' }}
              value={`
             import {DragModal} from'advanced-antd'

             const [open, setOpen] = useState(false)
             <DragModal
                title="Dragable Modal"
                drageable={${dragable}}
                open={open}
                onOk={() => {setOpen(false)}}
                onCancel={() => {setOpen(false)}}
              >
              content
              </DragModal>`}
            />
          </div>
          <div>
            <div>
              <Radio.Group
                options={options}
                onChange={onChange}
                value={value}
                optionType="button"
                buttonStyle="solid"
                style={{ marginTop: '30px' }}
              />
              {value == 'ScrollTable' && (
                <Space align="center" style={{ marginLeft: 16 }}>
                  isFillUp: <Switch checked={isFillUp} onChange={setIsFillUp} />
                </Space>
              )}
            </div>

            {/* minus and plus button */}

            <TextArea
              rows={10}
              style={{ width: '400px', marginTop: '15px', display: 'block' }}
              value={`
            ${
              value == 'Table'
                ? "import { Table } from 'antd';"
                : "import {ScrollTable} from'advanced-antd';"
            } 


              <${value}
                columns={columns}
                dataSource={data}
                rowKey='name'
                isFillUp={${isFillUp ? 'true' : 'false'}}
              />`}
            />
          </div>
        </div>
        {value === 'Table' && (
          <>
            <Table
              columns={columns}
              dataSource={data}
              rowKey="name"
              pagination={{ defaultPageSize: 20 }}
              // bottomHeight={72}
            />
          </>
        )}
        {value === 'ScrollTable' && (
          <ScrollTable
            columns={columns}
            dataSource={data}
            rowKey="name"
            scroll={{ x: 1000, y: 300 }}
            pagination={{ defaultPageSize: 20 }}
            isFillUp={isFillUp}
          />
        )}
      </div>
      <DragModal
        title="Dragable Modal"
        dragable={dragable}
        open={open}
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        content
      </DragModal>
    </div>
  );
};

export default Index;
