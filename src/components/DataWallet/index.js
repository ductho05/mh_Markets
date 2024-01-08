import React from 'react'
import DataWalletItem from './DataWalletItem'

const datas = [
    {
        type: 'MT4',
        value: 0
    },
    {
        type: 'MT5',
        value: 0
    }
]
function DataWallet() {
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
                    <DataWalletItem data={data} />
                ))
            }
        </div>
    )
}

export default DataWallet