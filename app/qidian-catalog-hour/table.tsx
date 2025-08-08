'use client'

import { Table } from '@arco-design/web-react';

interface Record {
  dt: number;
  cnt: number;
}

export default function TablePage({ data }: { data: Record[] }) {
  const columns = [
    {
      title: '小时',
      dataIndex: 'dt',
      width: 100,
    },
    {
      title: '次数',
      dataIndex: 'cnt',
      width: 100,
      align: 'right' as const,
    },
  ];
  const columnsWidth =  columns.reduce(
    (acc, value) => acc + value.width, 0);

  const Row = Table.Summary.Row;
  const Cell = Table.Summary.Cell;
  function summary(data: Record[] | undefined) {
    return (
      <Row>
        <Cell>Total</Cell>
        <Cell style={{textAlign: 'right'}}>
          {(data !== undefined) && data.reduce((acc, value) => acc + value.cnt, 0)}
        </Cell>
      </Row>
    );
  }
  
  return (
    <Table
      columns={columns}
      scroll={{x: columnsWidth}}
      data={data}
      pagination={false}
      summary={summary}
    />
  )
}
