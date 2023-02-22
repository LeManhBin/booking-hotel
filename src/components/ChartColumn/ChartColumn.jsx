import React from 'react'
import { Column } from '@ant-design/plots';

const ChartColumn = () => {
    const data = [
        {
          type: 'January',
          sales: 3800,
        },
        {
          type: 'February',
          sales: 5200,
        },
        {
          type: 'March',
          sales: 6100,
        },
        {
          type: 'April',
          sales: 14500,
        },
        {
          type: 'May',
          sales: 4800,
        },
        {
          type: 'June',
          sales: 3800,
        },
        {
          type: 'July',
          sales: 3800,
        },
        {
          type: 'August',
          sales: 3800,
        },
        {
          type: 'September',
          sales: 2800,
        },
        {
          type: 'October',
          sales: 5800,
        },
        {
          type: 'November',
          sales: 5500,
        },
        {
          type: 'December',
          sales: 6800,
        },
      ];
      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          position: 'middle',
          style: {
            fill: '#FFFFFF',
            opacity: 0.6,
          },
        },
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: 'Revenue',
          },
        },
      };
  return (
    <Column {...config} />
  )
}

export default ChartColumn