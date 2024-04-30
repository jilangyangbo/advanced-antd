import { useEffect, useState, useRef } from 'react';
import * as React from 'react';
import { Table, TableProps } from 'antd';

interface CustomTableProps extends TableProps<any> {
  // 在此添加自定义属性或覆盖现有属性
  bottomHeight?: number;
}
const Index: React.FC<CustomTableProps> = (props: any) => {
  const [scrollY, setScrollY] = useState<any>(0);
  const tableRef = useRef<any>(null);
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.getElementsByClassName(
        'ant-table-body'
      )[0].style.overflowY = 'auto';
    }
    const sy = getTableScroll({
      ref: tableRef,
      extraHeight: props.bottomHeight,
    });
    setScrollY(sy);
  }, [props]);
  return (
    <div ref={tableRef}>
      {/* 保留Table的其他属性以及scroll.x */}
      <Table {...props} scroll={{ x: props.scroll?.x, y: scrollY }} />
    </div>
  );
};
export default Index;
/**
 * 获取第一个表格的可视化高度
 * @param {number} extraHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 * @param {reactRef} ref Table所在的组件的ref
 */
function getTableScroll(props: any) {
  let { extraHeight } = props;
  const { ref } = props;
  if (typeof extraHeight == 'undefined') {
    //  默认底部分页高度
    extraHeight = 74;
  }
  let tHeader = null;
  if (ref && ref.current) {
    tHeader = ref.current.getElementsByClassName('ant-table-thead')[0];
  } else {
    tHeader = document.getElementsByClassName('ant-table-thead')[0];
  }
  //表格内容距离顶部的距离
  let tHeaderBottom = 0;
  if (tHeader) {
    tHeaderBottom = tHeader.getBoundingClientRect().bottom;
  }
  // 窗体高度-表格内容顶部的高度-表格内容底部的高度
  const height = `calc(100vh - ${tHeaderBottom + extraHeight}px)`;
  return height;
}
