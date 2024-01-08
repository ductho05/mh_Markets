"use client"
import { RollbackOutlined } from '@ant-design/icons'
import React from 'react'
import { useRouter } from 'next/navigation'
import Tabs from '@/components/Tabs'
import ApplyAccount from '@/components/ApplyAccount'

const tabs = ["Apply account"]
const components = [<ApplyAccount />]
function MtOpenAccount() {

    const route = useRouter()

    const handleBack = () => {

        route.back()
    }

    return (
        <div className='p-[20px]'>
            <div className='flex items-center'>
                <div onClick={handleBack} className='px-[10px] text-[13px] py-[4px] rounded-[6px] text-[#fff] w-max bg-[rgba(1,1,1,0.2)] cursor-pointer'>
                    <RollbackOutlined />
                </div>
                <p className='text-[#333] font-[600] ml-[6px]'>
                    Apply for samename account
                </p>
            </div>

            <div className='mt-[40px]'>
                <Tabs tabs={tabs} components={components} />
            </div>
        </div>
    )
}

export default MtOpenAccount