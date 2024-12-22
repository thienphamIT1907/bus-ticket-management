import type { TableProps } from 'antd';
import { Table } from 'antd';

export const BaseTable = (props: TableProps) => (
  <Table
    {...props}
    scroll={{ x: 'max-content' }}
    rowClassName={() => 'custom-row'}
    rowKey={(record) => record?.id || record?.key}
    pagination={false}
  />
);
