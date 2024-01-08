import React from 'react'
import DataStatisticItem from './DataStatisticItem'
import BG_Data_Cumulative from '@/assets/images/Backgrounds/BG_Data_Cumulative.png'
import BG_Data_Yesterday from '@/assets/images/Backgrounds/BG_Data_Yesterday.png'
import BG_Data_Today from '@/assets/images/Backgrounds/BG_DATA_Today.png'

const datas = [
    {
        title: 'Cumulative Commission',
        value: 0.14,
        background: BG_Data_Cumulative
    },
    {
        title: 'Today Commission',
        value: 1.4,
        background: BG_Data_Today
    },
    {
        title: 'Yesterday Commission',
        value: 2.45,
        background: BG_Data_Yesterday
    }
]
function DataStatistic() {
    return (
        <div
            style={{
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                borderBottomLeftRadius: '12px',
            }}
            className='p-[20px] bg-white grid gap-[20px] grid-cols-3'
        >
            {
                datas.map(data => (
                    <DataStatisticItem key={data.title} data={data} />
                ))
            }
        </div>
    )
}

export default DataStatistic