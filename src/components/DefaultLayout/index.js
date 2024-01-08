"use client"
import routes from '@/routes'
import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import styles from './defaultlayout.module.css'
import { style } from '@mui/system'

function DefaultLayout({ children }) {

    const pathName = usePathname()
    const [isAccountPage, setIsAccountPage] = React.useState(false)

    React.useEffect(() => {

        if (pathName.startsWith(routes.login) || pathName.startsWith(routes.register) || pathName.startsWith(routes.forget_password)) {
            setIsAccountPage(true)
        }
    }, [pathName])

    return (
        <div>
            {
                isAccountPage
                    ? <div>
                        {children}
                    </div>
                    : <div className='flex items-start'>
                        <Sidebar />
                        <div className='flex-[4] relative'>
                            <div className='absolute z-[1] top-0 right-0 left-0'>
                                <Navbar />
                            </div>
                            <div className={styles.bottom_content}>
                                {children}
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default DefaultLayout