import React from 'react'
import { Button } from 'antd'
import Meta_Trader4 from '@/assets/images/icons/Meta_Trader4.png'
import Meta_Trader5 from '@/assets/images/icons/Meta_Trader5.png'
import BG_Trader_4 from '@/assets/images/Backgrounds/BG_Trader_4.png'
import BG_Trader_5 from '@/assets/images/Backgrounds/BG_Trader_5.png'
import Image from 'next/image'

function DataWalletItem({ data }) {
    return (
        <div
            style={{
                backgroundImage: `url(${data.type == 'MT4' ? BG_Trader_4?.src : BG_Trader_5?.src})`,
                backgroundSize: '100% 111%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
            className='p-[20px] rounded-[12px]'
        >
            <p className='ml-[60px] border-l-4 border-red-600 text-[13px] font-[600] text-red-500 pl-[6px]'>
                {data.type} Wallet
            </p>
            <div className='flex items-center flex-col mt-[10px]'>
                <p className='text-[#333] font-[600]'>{Number.parseFloat(data.value).toFixed(8)} USD</p>
                <Button className='mt-[10px] border-none bg-red-700 text-white font-[500] px-[40px]'>
                    Draw
                </Button>
            </div>
            <div className='mt-[10px] pr-[20px] pb-[20px] flex justify-end'>
                <Image style={{
                    width: '48px',
                    height: '36px',
                    objectFit: 'contain',
                }}
                    src={data.type == 'MT4' ? Meta_Trader4 : Meta_Trader5}
                    alt="Meta Trader 4"
                />
            </div>
        </div>
    )
}

export default DataWalletItem