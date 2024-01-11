import Image from 'next/image'
import React from 'react'
import Meta_Trader4 from '@/assets/images/icons/Meta_Trader4.png'
import Meta_Trader5 from '@/assets/images/icons/Meta_Trader5.png'
import Link from 'next/link'

function DepositItem({ data, type }) {
    return (
        <Link href={`/${type}?mt_server=${data.type}`} className={`p-[40px] cursor-pointer rounded-[12px] ${data.type === "MT4" ? "bg-[#f5f8f5] text-[#508a40]" : "bg-[#eff5f8] text-[#347ca4]"}`}>
            <div className='flex items-center'>
                <p className='font-[600]'>{data.type}</p>
                <p className='text-[13px] ml-[8px] font-[600]'>
                    {type === 'deposit' ? "Deposit" : "Withdrawal"}
                </p>
            </div>
            <div className='flex'>
                <p className='text-[13px] font-[500]'>
                    {`Support: ${data.support}`}
                </p>
                <Image
                    className='w-[100px] h-[100px] object-contain'
                    src={data.type === "MT4" ? Meta_Trader4 : Meta_Trader5}
                    alt="icon"
                />
            </div>
        </Link>
    )
}

export default DepositItem