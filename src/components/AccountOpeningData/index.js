"use client"
import { RightOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import React from 'react'
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
        "Number of Trader Users": 0,
        "Number of Broker Users": 2,
        "MT Account": 1
    },
    {
        date: '2023-12-25',
        "Number of Trader Users": 7,
        "Number of Broker Users": 1,
        "MT Account": 12
    },
    {
        date: '2023-12-26',
        "Number of Trader Users": 5,
        "Number of Broker Users": 4,
        "MT Account": 3
    },
    {
        date: '2023-12-27',
        "Number of Trader Users": 4,
        "Number of Broker Users": 12,
        "MT Account": 2
    },
    {
        date: '2023-12-28',
        "Number of Trader Users": 7,
        "Number of Broker Users": 10,
        "MT Account": 8
    },
    {
        date: '2023-12-29',
        "Number of Trader Users": 10,
        "Number of Broker Users": 12,
        "MT Account": 9
    },
    {
        date: '2023-12-30',
        "Number of Trader Users": 11,
        "Number of Broker Users": 14,
        "MT Account": 6
    }
]
function AccountOpeningData() {

    const [filter, setFilter] = React.useState(items[0])
    const [currentTab, setCurrentTab] = React.useState(0)

    const handleChange = (value, option) => {

        setFilter(option)
    }

    return (
        <div className='p-[20px] rounded-[12px] bg-white'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <p className='text-[13px] font-[600] text-[#333] mr-[10px]'>
                        Account Opening Data
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
            <div className='bg-transparent flex items-center mt-[20px]'>
                {
                    ["All", "Directly under"].map((tab, index) => (
                        <div onClick={() => setCurrentTab(index)} key={tab} className='relative flex items-center'>
                            {
                                index !== 0 &&
                                <div style={{
                                    width: "30px",
                                    borderBottom: `30px solid ${index === currentTab ? "#f0f2f5" : "#fff"}`,
                                    borderLeft: "30px solid transparent",
                                    zIndex: `${index === currentTab ? "3" : "1"}`,
                                    position: "absolute",
                                    left: "-23%",
                                }}></div>
                            }
                            <div
                                className='cursor-pointer flex justify-center items-center'
                                style={{
                                    width: "100px",
                                    height: "30px",
                                    backgroundColor: `${index === currentTab ? "#f0f2f5" : "#fff"}`,
                                    borderTopLeftRadius: `${index === 0 ? "12px" : "0"}`
                                }}
                            >
                                <p className={`${index === currentTab ? "text-[#333]" : "text-[#999]"} text-[13px] font-[500]`}>
                                    {tab}
                                </p>
                            </div>
                            <div style={{
                                width: "30px",
                                borderBottom: `30px solid ${index === currentTab ? "#f0f2f5" : "#fff"}`,
                                borderRight: "30px solid transparent",
                                zIndex: "2"
                            }}></div>
                        </div>
                    ))
                }
            </div>
            <div
                style={{
                    borderTopLeftRadius: `${currentTab !== 0 ? "12px" : "0"}`,
                    borderTopRightRadius: "12px",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                }}
                className='px-[40px] py-[20px] bg-[#f0f2f5] grid gap-[10px] grid-cols-6'
            >
                <div className='text-[13px]'>
                    <p className='font-[600] text-[14px] text-[#000]'>0</p>
                    <p className='font-[500] text-[#333]'>Number of people(units)</p>
                </div>
                <div className='text-[13px]'>
                    <p className='font-[600] text-[14px] text-[#000]'>0</p>
                    <p className='font-[500] text-[#333]'>IB(units)</p>
                </div>
                <div className='text-[13px]'>
                    <p className='font-[600] text-[14px] text-[#000]'>0</p>
                    <p className='font-[500] text-[#333]'>TA(units)</p>
                </div>
                <div className='text-[13px]'>
                    <p className='font-[600] text-[14px] text-[#000]'>0</p>
                    <p className='font-[500] text-[#333]'>Accounts(units)</p>
                </div>
                <div className='text-[13px]'>
                    <p className='font-[600] text-[14px] text-[#000]'>{Number.parseInt(0).toFixed(2)}</p>
                    <p className='font-[500] text-[#333]'>Transaction Volume(Lots)</p>
                </div>
                <div className='text-[13px]'>
                    <p className='font-[600] text-[14px] text-[#000]'>{Number.parseInt(0).toFixed(2)}</p>
                    <p className='font-[500] text-[#333]'>Profit and Loss (USD)</p>
                </div>
            </div>
            <div className='mt-[20px]'>
                <LineCharts
                    data={data}
                    dataKey1="Number of Trader Users"
                    dataKey2="Number of Broker Users"
                    dataKey3="MT Account"
                    xAxis={"date"}
                />
            </div>
        </div>
    )
}

export default AccountOpeningData