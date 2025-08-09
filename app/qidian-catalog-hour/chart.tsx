'use client'

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface Record {
  dt: number;
  cnt: number;
}

export default function ChartPage({ data }: { data: Record[] }) {
  const container = useRef(null);
  const chartRef = useRef<echarts.EChartsType | null>(null);

  useEffect(() => {
    if (!container.current) return;

    // 如果已有图表实例，先清理
    if (chartRef.current) {
      chartRef.current.dispose();
    }

    // 初始化图表
    chartRef.current = echarts.init(container.current);
    
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
        type: 'category' as const,
        data: data.map(x => x.dt.toString())
      },
      yAxis: {
        name: '次数',
        type: 'value' as const
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
    
    chartRef.current.setOption(option);

    // 响应窗口大小变化
    const handleResize = () => {
      chartRef.current?.resize();
    };
    
    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      chartRef.current?.dispose();
      chartRef.current = null;
    };
  }, [data]); // 添加依赖项

  return (
    <div ref={container} style={{ width: '100%', height: '400px' }}></div>
  );
}
