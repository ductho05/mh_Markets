import Tabs from '@/components/Tabs'
import WithDrawalList from '@/components/WithDrawal'
import React from 'react'

const tabs = ["Withdrawal"]

const components = [<WithDrawalList key={"withdraw"} />]

function WithDrawal() {
    return (
        <div className='p-[20px]'>
            <div className='flex items-center'>
                <p className='text-[#333] font-[600] ml-[6px]'>
                    Withdrawal Application
                </p>
            </div>

            <div className='mt-[40px]'>
                <Tabs tabs={tabs} components={components} />
            </div>
        </div>
    )
}

export default WithDrawal