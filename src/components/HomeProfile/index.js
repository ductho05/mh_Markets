import React from 'react'
import Image from 'next/image'
import male from '@/assets/images/Avatars/male.png'

function HomeProfile() {
    return (
        <div className='grid gap-[20px] grid-cols-4'>
            <div className='flex items-center'>
                <Image
                    className='rouded-[100%]'
                    src={male}
                    alt="avatar"
                    style={{
                        width: '72px',
                        height: '72px',
                        marginRight: '10px',
                    }}
                />
                <div className='text-[12px] text-[#000] font-[500]'>
                    <p>
                        Good Afternoon
                    </p>
                    <p className='uppercase'>
                        Ninh Đức Thọ
                    </p>
                    <p>
                        Wish you happy every day!
                    </p>
                    <p className='text-[11px] text-[#666] mt-[6px]'>
                        Every successful person has a beginning, and the courage to start is the key to finding the path to success.
                    </p>
                </div>
            </div>
            <div className='text-[12px] flex items-center flex-col border-r'>
                <p className='text-red-700 font-[500]'>Identification ID</p>
                <p className='text-[#000] font-[600] mt-[40px]'>1Z98</p>
            </div>
            <div className='text-[12px] flex items-center flex-col'>
                <p className='text-red-700 font-[500]'>Phone</p>
                <p className='text-[#000] font-[600] mt-[40px]'>+8477404581</p>
            </div>
            <div className='text-[12px] flex items-center flex-col border-l'>
                <p className='text-red-700 font-[500]'>Email</p>
                <p className='text-[#000] font-[600] mt-[40px]'>ductho23pro@gmail.com</p>
            </div>
        </div>
    )
}

export default HomeProfile