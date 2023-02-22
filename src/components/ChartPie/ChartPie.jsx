import React, { useEffect, useMemo, useState } from 'react'
import { Pie, measureTextWidth } from '@ant-design/plots';
import { useSelector } from 'react-redux';

const ChartPie = () => {
    
    // const roomTypeStandard = useSelector((status) => status.rooms.allRooms.filter(type => type.typeRoom === 'Standard'))
    const allRoomsState = useSelector((status) => status.rooms.allRooms)
    // const roomTypeSuperior = useSelector((status) => status.rooms.allRooms.filter(type => type.typeRoom === 'Superior'))
    // const roomTypeDeluxe = useSelector((status) => status.rooms.allRooms.filter(type => type.typeRoom === 'Deluxe'))
    // const roomTypeSuite = useSelector((status) => status.rooms.allRooms.filter(type => type.typeRoom === 'Suite'))
    // const roomTypeConnecting = useSelector((status) => status.rooms.allRooms.filter(type => type.typeRoom === 'Connecting'))
   
    const computedRoomType = useMemo(()=>{
      return allRoomsState.reduce((prevObj, room)=>{
        if(room.typeRoom === 'Standard'){
          return {
            ...prevObj,
            standard: (prevObj.standard || 0) + 1
          }
        }
        if(room.typeRoom === 'Superior'){
          return {
            ...prevObj,
            superior: (prevObj.superior || 0) + 1
          }
        }
        if(room.typeRoom === 'Deluxe'){
          return {
            ...prevObj,
            deluxe: (prevObj.deluxe || 0) + 1
          }
        }
        if(room.typeRoom === 'Suite'){
          return {
            ...prevObj,
            suite: (prevObj.suite || 0) + 1
          }
        }
        if(room.typeRoom === 'Connecting'){
          return {
            ...prevObj,
            connecting: (prevObj.connecting || 0) + 1
          }
        }

        return {...prevObj}
      }, {})
    }, [allRoomsState])

    function renderStatistic(containerWidth, text, style) {
        const { width: textWidth, height: textHeight } = measureTextWidth(text, style);
        const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2
    
        let scale = 1;
    
        if (containerWidth < textWidth) {
          scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }
    
        const textStyleStr = `width:${containerWidth}px;`;
        return `<div style="${textStyleStr};font-size:${scale}em;line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    }

    console.log(computedRoomType);

    const data = [
        {
          type: 'Standard',
          value: computedRoomType.standard,
        },
        {
          type: 'Superior',
          value: computedRoomType.superior,
        },
        {
          type: 'Deluxe',
          value: computedRoomType.deluxe,
        },
        {
          type: 'Suite',
          value: computedRoomType.suite,
        },
        {
          type: 'Connecting',
          value: computedRoomType.connecting,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        meta: {
          value: {
            formatter: (v) => `${v} ¥`,
          },
        },
        label: {
          type: 'inner',
          offset: '-50%',
          style: {
            textAlign: 'center',
          },
          autoRotate: false,
          content: '{value}',
        },
        statistic: {
          title: {
            offsetY: -4,
            customHtml: (container, view, datum) => {
              const { width, height } = container.getBoundingClientRect();
              const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
              const text = datum ? datum.type : 'Rooms';
              return renderStatistic(d, text, {
                fontSize: 28,
              });
            },
          },
          content: {
            offsetY: 4,
            style: {
              fontSize: '32px',
            },
            customHtml: (container, view, datum, data) => {
              const { width } = container.getBoundingClientRect();
              const text = datum ? ` ${datum.value}` : ` ${data.reduce((r, d) => r + d.value, 0)}`;
              return renderStatistic(width, text, {
                fontSize: 32,
              });
            },
          },
        },
     
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
          {
            type: 'pie-statistic-active',
          },
        ],
    };
  return (
    <div className='pie'>
        <Pie {...config} />;
    </div>
  )
}

export default ChartPie