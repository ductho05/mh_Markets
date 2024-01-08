import DemoAccount from '@/components/DemoAccount'
import RealAccount from '@/components/RealAccount'
import Tabs from '@/components/Tabs'
import React from 'react'

const tabs = ['Real Account', 'Demo Account']
const components = [<RealAccount />, <DemoAccount />]
function myAccount() {
    return (
        <div className='p-[20px]'>
            <p className='text-[#333] font-[600]'>My Account</p>

            <div className='mt-[20px]'>
                <Tabs tabs={tabs} components={components} />
            </div>
        </div>
    )
}

export default myAccount