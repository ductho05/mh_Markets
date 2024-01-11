
import DepositList from '@/components/Deposit'
import Tabs from '@/components/Tabs'
import React from 'react'

const tabs = ["Deposit"]

const components = [<DepositList />]

function Deposit() {
    return (
        <div className='p-[20px]'>
            <div className='flex items-center'>
                <p className='text-[#333] font-[600] ml-[6px]'>
                    Deposit Application
                </p>
            </div>

            <div className='mt-[40px]'>
                <Tabs tabs={tabs} components={components} />
            </div>
        </div>
    )
}

export default Deposit