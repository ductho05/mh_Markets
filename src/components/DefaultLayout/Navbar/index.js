import React from 'react'
import BG_Navbar from '@/assets/images/Backgrounds/BG_Navbar.png'
import male from '@/assets/images/Avatars/male.png'
import { BellOutlined, DownloadOutlined, DownOutlined, GlobalOutlined, SendOutlined, SwapOutlined, TeamOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { Dropdown } from 'antd'
import Link from 'next/link'
import routes from '@/routes'

function Navbar() {

    const items = routes.dropDown.map((item, index) => {

        return {
            key: index + 1,
            label: (
                <Link href={item.path}>
                    {item.name}
                </Link>
            ),
        }
    })

    return (
        <div
            className='h-[40vh]'
            style={{
                backgroundImage: `url(${BG_Navbar?.src})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <div className='flex items-center justify-between p-[20px]'>
                <div className='flex items-center cursor-pointer'>
                    <p className='text-[13px] text-[#333] font-[600] mr-[6px]'>MT4</p>
                    <DownloadOutlined className='text-red-500' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <p className='text-[13px] text-[#333] font-[600] mr-[6px]'>MT5</p>
                    <DownloadOutlined className='text-red-500' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <p className='text-[13px] text-[#333] font-[600] mr-[6px]'>IB Area</p>
                    <SwapOutlined className='text-red-500' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <p className='text-[13px] text-[#333] font-[600] mr-[6px]'>Account Opening Link</p>
                    <SendOutlined className='text-red-500' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <p className='text-[13px] text-[#333] font-[600] mr-[6px]'>Follow community</p>
                    <TeamOutlined className='text-red-500' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <GlobalOutlined className='text-[#333]' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <BellOutlined className='text-[#333]' />
                </div>
                <Dropdown
                    menu={{
                        items
                    }}
                    trigger={['click']}
                >
                    <div className='flex items-center cursor-pointer'>
                        <Image
                            className='rouded-[100%]'
                            src={male}
                            alt="avatar"
                            style={{
                                width: '30px',
                                height: '30px',
                                marginRight: '10px',
                            }}
                        />
                        <p className='text-[13px] uppercase text-[#333] font-[600] mr-[6px]'>
                            Nịnh Đức Thọ
                        </p>
                        <DownOutlined className='text-[13px]' />
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default Navbar