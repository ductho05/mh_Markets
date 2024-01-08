import { DatabaseOutlined, RightOutlined } from '@ant-design/icons'
import React from 'react'

function DataStatisticItem({ data }) {
    return (
        <div
            className='flex flex-col py-[30px] px-[20px] rounded-[12px] text-white'
            style={{
                backgroundImage: `url(${data.background?.src})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <div className='flex items-center'>
                <DatabaseOutlined />
                <p className='text-[13px] font-[600] ml-[6px]'>
                    {data.title}
                </p>
            </div>
            <div className='flex items-center justify-between mt-[10px]'>
                <p>
                    {Number.parseFloat(data.value).toFixed(2)} USD
                </p>
                <RightOutlined className='text-[13px] cursor-pointer' />
            </div>
        </div>
    )
}

export default DataStatisticItem