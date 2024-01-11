"use client"
import React from 'react'
import { Button, DatePicker, Modal, Select, Table, Tooltip } from 'antd'
import styles from './ApplicationRecord.module.css'
import { FileSearchOutlined, MinusCircleOutlined } from '@ant-design/icons'

// fetch Data
const datas = []

for (let i = 0; i < 100; i++) {
    datas.push({
        id: `id-${i}`,
        key: i + 1,
        mt_account: 609438,
        type: 'Wire transfer withdraw',
        status: (i + 1) % 2 == 0 ? 'Remitted' : 'Processing',
        order_number: '202310040222436799_MTWD',
        time: '2023-10-04 02:22:43',
        review_time: '2023-10-04 02:46:59',
        feedback: ''
    })
}

const typeOptions = [
    {
        label: "Online Deposit",
        value: "Online Deposit"
    },
    {
        label: "Wire Transfer Deposit",
        value: "Wire Transfer Deposit"
    },
    {
        label: "Digital Currency Deposit",
        value: "Digital Currency Deposit"
    },
    {
        label: "Internal deposit",
        value: "Internal deposit"
    },
    {
        label: "Leverage",
        value: "Leverage"
    },
    {
        label: "Open Account",
        value: "Open Account"
    },
    {
        label: "Namesake Account",
        value: "Namesake Account"
    }
]

const statusOptions = [
    {
        label: "Pending",
        value: "pending"
    },
    {
        label: "Processing",
        value: "processing"
    },
    {
        label: "Reject",
        value: "Reject"
    },
    {
        label: "Finish",
        value: "finish"
    },
    {
        label: "Customer Termination",
        value: "termination"
    }
]

function ApplicationRecord() {

    const [tableParams, setTableParams] = React.useState({
        pagination: {
            current: 1,
            pageSize: 10,
            total: datas.length,
            showQuickJumper: true
        },
    })

    const [isView, setIsView] = React.useState(false)
    const [type, setType] = React.useState(null)
    const [status, setStatus] = React.useState(null)
    const [dates, setDates] = React.useState()

    const columns = [
        {
            title: 'No.',
            dataIndex: 'key',
            width: '60px'
        },
        {
            title: 'MT Account',
            dataIndex: 'mt_account',
            width: '80px'
        },
        {
            title: 'Application Type',
            dataIndex: 'type',
            width: '150px'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: '100px',
            render: (status) => <p className={`font-[600] ${status === 'Remitted' || status === 'Complete' ? "text-green-500" : status == 'Processing' ? "text-orange-500" : "bg-red-500"}`}>{status}</p>
        },
        {
            title: 'Order Number',
            dataIndex: 'order_number',
            width: '160px'
        },
        {
            title: 'Application Time',
            dataIndex: 'time',
            width: '150px'
        },
        {
            title: 'Review Time',
            dataIndex: 'review_time',
            width: '150px'
        },
        {
            title: 'Process Feedback',
            dataIndex: 'feedback',
            width: '100px'
        },
        {
            title: 'Operation',
            dataIndex: 'id',
            fixed: 'right',
            width: '100px',
            render: (id, item) => {

                const handleView = () => {
                    setIsView(true)
                }

                return (
                    <div className='flex justify-center'>
                        {
                            item.status === 'Processing'
                                ? <Tooltip title="Termination">
                                    <MinusCircleOutlined className='text-[24px] text-red-500 mr-[10px] cursor-pointer' />
                                </Tooltip>
                                : ""
                        }
                        <Tooltip title="View">
                            <FileSearchOutlined onClick={handleView} className='text-[24px] text-[#666] cursor-pointer' />
                        </Tooltip>
                    </div>
                )
            }
        }
    ]

    const handleChange = (pagination) => {
        setTableParams(prev => ({ ...prev, pagination: pagination }))
    }

    const handleChangeType = (value, option) => {

        setType(option)
    }

    const handleChangeStatus = (value, option) => {

        setStatus(option)
    }

    const onChangeTime = (value, dateString) => {

        setDates(value)
    }

    const handleReset = () => {
        setType(null)
        setStatus(null)
        setDates([])
    }

    return (
        <div
            style={{
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                borderBottomLeftRadius: '12px',
            }}
            className='p-[20px] bg-white'
        >
            <Modal
                title="View"
                open={isView}
                onOk={() => setIsView(false)}
                onCancel={() => setIsView(false)}
                okButtonProps={{
                    hidden: true,
                }}
                cancelButtonProps={{
                    hidden: true,
                }}
                width="50vw"
            >
                <div className='border-t grid gap-[20px] grid-cols-2 pt-[20px]'>
                    <div className='flex items-center text-[13px]'>
                        <p className='font-[600] text-[#000]'>
                            Order Number:
                        </p>
                        <p className='font-[500] text-[#333] ml-[10px]'>
                            202310040222436799_MTWD
                        </p>
                    </div>
                    <div className='flex items-center text-[13px]'>
                        <p className='font-[600] text-[#000]'>
                            Drawing Account:
                        </p>
                        <p className='font-[500] text-[#333] ml-[10px]'>
                            609438
                        </p>
                    </div>
                </div>
            </Modal>
            <div className='pt-[20px]'>
                <div className='mb-[30px]'>
                    <Select
                        className='w-[180px]'
                        options={typeOptions}
                        placeholder="Application Type"
                        value={type}
                        onChange={handleChangeType}
                        allowClear
                    />
                    <Select
                        className='w-[180px] ml-[20px]'
                        options={statusOptions}
                        placeholder="Status"
                        value={status}
                        onChange={handleChangeStatus}
                        allowClear
                    />
                    <DatePicker.RangePicker
                        value={dates}
                        className='w-[340px] ml-[20px]'
                        showTime={{
                            format: 'HH:mm',
                        }}
                        format="YYYY-MM-DD HH:mm:ss"
                        onChange={onChangeTime}
                    />
                    <Button className={styles.button_search}>
                        Search
                    </Button>
                    <Button onClick={handleReset} className={styles.button_reset}>
                        Reset
                    </Button>
                </div>
            </div>
            <Table
                rowKey={(record) => record?.login?.uuid}
                dataSource={datas}
                columns={columns}
                scroll={{
                    x: 1500
                }}
                size="middle"
                pagination={tableParams.pagination}
                onChange={handleChange}
            />
        </div>
    )
}

export default ApplicationRecord