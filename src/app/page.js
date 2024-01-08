import AccountOpeningData from '@/components/AccountOpeningData';
import CommissionData from '@/components/CommissionData';
import DataStatistic from '@/components/DataStatistic';
import DataWallet from '@/components/DataWallet';
import HomeProfile from '@/components/HomeProfile';
import Tabs from '@/components/Tabs';
import React from 'react';

const tabs = ['Statistics', 'Wallet']
const components = [<DataStatistic />, <DataWallet />]
export default function Home() {
    return (
        <div className='p-[20px]'>
            <HomeProfile />
            <div className='mt-[60px]'>
                <Tabs tabs={tabs} components={components} />
            </div>
            <div className='mt-[20px]'>
                <CommissionData />
            </div>
            <div className='mt-[20px]'>
                <AccountOpeningData />
            </div>
        </div>
    )
}
