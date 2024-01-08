import React from 'react'
import MHMarkets from '@/assets/logo/MHMarkets.png'
import Image from 'next/image'
import routes from '@/routes'
import Link from 'next/link'
import styles from './sidebar.module.css'
import { usePathname } from 'next/navigation'

function Sidebar() {

    const pathName = usePathname()

    console.log(pathName)

    return (
        <div className='flex-[1] px-[20px] pt-[20px]'>
            <Image
                src={MHMarkets}
                alt="LOGO"
                style={{
                    width: '100%',
                    height: '100px',
                    objectFit: 'contain'
                }}
            />
            <div className={styles.sidebar}>
                {
                    routes.sidebars.map(item => {
                        const Icon = item.icon

                        return (
                            <Link
                                className={`w-full flex flex-col items-center mt-[6px] py-[6px] rounded-[12px] hover:bg-[#bdbbbf] ${pathName == item.path ? "bg-[#fff]" : ""}`}
                                href={item.path}
                                key={item.name}
                            >
                                {Icon}
                                <p className='text-[13px] text-[#333] font-[600]'>
                                    {item.name}
                                </p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar