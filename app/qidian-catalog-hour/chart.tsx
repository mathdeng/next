'use client'

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface Record {
 dt: number;
 cnt: number;
}

export default function ChartPage({ data }: { data: Record[] }) {  const container = useRef(null);

  useEffect(() => {
    const myChart = echarts.init(container.current);
    const option = {
      title: {
        text: '图表',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis' as const
      },
      xAxis: {
        name: '小时',
        data: data.map(x => x.dt)
      },
      yAxis: {
        name: '次数'
      },
      series: [{
        type: 'bar',
        data: data.map(x => x.cnt),
        label: {
          show: true,
          position: 'top'
        }
      }]
    };
    myChart.setOption(option);
  })

  return (
    <>
      <div ref={container} style={{ width: '100%', height: '400px' }}></div>
    </>
  )
}
