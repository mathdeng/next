'use client'

import { Table, type TableColumnProps } from '@arco-design/web-react';

type Record = {
  uuid: number;
  cN: string;
  uT: string;
  cnt: number;
  cU: string;
  id: number;
  sS: number
}

export default function TablePage({ data, bookId }: { data: Record[], bookId: string }) {
  const columns = [
    {
      title: '日期',
      dataIndex: 'uT',
      width: 200,
    },
    {
      title: '章节',
      render: (_: TableColumnProps, { cN, id }: Record) => <a target="_blank" rel="noopener noreferrer" href={`https://m.qidian.com/chapter/${bookId}/${id}/`} className="text-indigo-500">{cN}</a>,
      width: 200,
    },
    {
      title: '字数',
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
        <Cell></Cell>
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
