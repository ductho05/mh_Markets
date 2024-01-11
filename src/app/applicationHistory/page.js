import ApplicationRecord from '@/components/ApplicationRecord'
import Tabs from '@/components/Tabs'
import React from 'react'

const tabs = ["App Record"]
const components = [<ApplicationRecord key={"application"} />]
function ApplicationHistory() {
    return (
        <div className='p-[20px]'>
            <div className='flex items-center'>
                <p className='text-[#333] font-[600] ml-[6px]'>
                    Application Record
                </p>
            </div>

            <div className='mt-[40px]'>
                <Tabs tabs={tabs} components={components} />
            </div>
        </div>
    )
}

export default ApplicationHistory