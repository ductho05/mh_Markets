import React from 'react'
import price from '@/assets/images/icons/price.png'
import Image from 'next/image'
import { ReloadOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'


const items = [
    {
        label: <p>Adjust Leverage</p>,
        key: '0',
    },
    {
        label: <p>Change Password</p>,
        key: '1',
    },
]

function UserItem() {
    return (
        <div className='flex items-center p-[20px]'>
            <Image src={price} alt="icon" className='w-[25px] h-[25px] object-contain' />
            <div className='ml-[10px]'>
                <div className='flex items-center'>
                    <p className='text-[13px] font-[600]'>8000670</p>
                    <p className='text-[12px] ml-[6px] text-[#666]'>/ MT4 / STD Cent / 1:500</p>
                </div>
                <p className='text-[13px] font-[500] text-[#666]'>Mohicans-Live</p>
            </div>
            <div className='ml-[70px] text-[13px]'>
                <p className='font-[500] text-[#999]'>Balance</p>
                <p className='font-[600]'>{Number.parseInt(0).toFixed(2)}</p>
            </div>
            <div className='ml-[70px] text-[13px]'>
                <p className='font-[500] text-[#999]'>Equity</p>
                <p className='font-[600]'>{Number.parseInt(0).toFixed(2)}</p>
            </div>
            <div className='ml-[70px] text-[13px]'>
                <p className='font-[500] text-[#999]'>Credit</p>
                <p className='font-[600]'>{Number.parseInt(0).toFixed(2)}</p>
            </div>
            <div className='ml-[70px] text-[#999] cursor-pointer'>
                <ReloadOutlined />
            </div>
            <Button className='ml-[70px]'>
                Transfer
            </Button>
            <div className='ml-[70px]'>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <SettingOutlined className='text-[#999]' />
                </Dropdown>
            </div>
        </div>
    )
}

export default UserItem