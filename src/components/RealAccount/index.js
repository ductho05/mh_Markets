"use client"
import { PlusCircleOutlined, SwapOutlined } from '@ant-design/icons'
import { Button, Pagination, Select } from 'antd'
import React from 'react'
import UserItem from '../UserItem'
import styles from './RealAccount.module.css'

const mtOptions = [
    {
        label: "MT4",
        value: 0
    },
    {
        label: "MT5",
        value: 1
    }
]

const leverageOptions = [
    {
        label: "1:50",
        value: 1 / 50
    },
    {
        label: "1:100",
        value: 1 / 100
    },
    {
        label: "1:200",
        value: 1 / 200
    },
    {
        label: "1:300",
        value: 1 / 300
    },
    {
        label: "1:400",
        value: 1 / 400
    },
    {
        label: "1:500",
        value: 1 / 500
    },
    {
        label: "1:1000",
        value: 0 / 1000
    }
]

function RealAccount() {

    const [currentMt, setCurrentMt] = React.useState({
        label: "Please select MT service",
        value: ""
    })

    const [currentLeverage, setCurrentLeverage] = React.useState({
        label: "Please select leverage",
        value: ""
    })

    const handleChangeMt = (value, option) => {

        setCurrentMt(option)
    }

    const handleChangeLeverage = (value, option) => {
        setCurrentLeverage(option)
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
            <div className='border-b pb-[20px]'>
                <div className='mb-[20px]'>
                    <Select
                        className='w-[180px]'
                        options={mtOptions}
                        defaultValue={currentMt}
                        onChange={handleChangeMt}
                    />
                    <Select
                        className='w-[180px] ml-[20px]'
                        options={leverageOptions}
                        defaultValue={currentLeverage}
                        onChange={handleChangeLeverage}
                    />
                    <Button className={styles.button_search}>
                        Search
                    </Button>
                    <Button className={styles.button_reset}>
                        Reset
                    </Button>
                    <Button
                        className={styles.button_plus_account}
                        icon={<PlusCircleOutlined />}
                    >
                        Account with the same name
                    </Button>
                </div>
                <div className='flex items-center text-[#c6222f] cursor-pointer w-max'>
                    <SwapOutlined />
                    <p className='text-[13px] ml-[6px] font-[500] '>Transfer</p>
                </div>
            </div>
            <div className={styles.list_users}>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                        <UserItem key={item} />
                    ))
                }
            </div>
            <div className='mt-[20px] flex justify-center'>
                <Pagination showQuickJumper defaultCurrent={1} total={100} />
            </div>
        </div>
    )
}

export default RealAccount