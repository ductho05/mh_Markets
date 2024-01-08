"use client"
import React from 'react'
import { Select } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import LineCharts from '../charts/LineChart'

const items = [
    {
        label: "Last 7 days",
        value: 7
    },
    {
        label: "Last 15 days",
        value: 15
    },
    {
        label: "Last 30 days",
        value: 30
    },
    {
        label: "Last 3 months",
        value: 3
    }

]

const data = [
    {
        date: '2023-12-24',
        "Commission of the day": 0
    },
    {
        date: '2023-12-25',
        "Commission of the day": 12
    },
    {
        date: '2023-12-26',
        "Commission of the day": 4
    },
    {
        date: '2023-12-27',
        "Commission of the day": 8
    },
    {
        date: '2023-12-28',
        "Commission of the day": 2
    },
    {
        date: '2023-12-29',
        "Commission of the day": 9
    },
    {
        date: '2023-12-30',
        "Commission of the day": 10
    }
]
function CommissionData() {

    const [filter, setFilter] = React.useState(items[0])

    const handleChange = (value, option) => {
        setFilter(option)
    }

    return (
        <div className='p-[20px] rounded-[12px] bg-white'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='text-[13px] font-[600] text-[#333] mr-[10px]'>
                        Commission Data
                    </p>
                    <Select
                        className='hover:border-red-500'
                        style={{
                            width: '130px'
                        }}
                        options={items}
                        defaultValue={filter}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex items-center cursor-pointer text-[13px]'>
                    <p className='mr-[6px]'>More</p>
                    <RightOutlined />
                </div>
            </div>
            <div className='mt-[20px]'>
                <LineCharts data={data} dataKey1="Commission of the day" xAxis={"date"} />
            </div>
        </div>
    )
}

export default CommissionData