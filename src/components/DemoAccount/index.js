import React from 'react'
import DemoAccountItem from './DemoAccountItem'

const datas = [
    {
        type: 'MT4',
        user: null
    },
    {
        type: 'MT5',
        user: null
    }
]
function DemoAccount() {
    return (
        <div
            style={{
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                borderBottomLeftRadius: '12px',
            }}
            className='p-[40px] bg-white grid gap-[40px] grid-cols-2'
        >
            {
                datas.map(data => (
                    <DemoAccountItem key={data.key} data={data} />
                ))
            }
        </div>
    )
}

export default DemoAccount