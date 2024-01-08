import React from 'react'
import BG_LOGIN from '@/assets/images/Backgrounds/BG_LOGIN.jpg'
import Image from 'next/image'
import { GRAY_COLOR } from '@/assets/colors/Colors'

function BackgroundLogin({ logo, logoWidth, footer, children }) {
    return (
        <div
            className='w-full h-screen'
            style={{
                backgroundImage: `url(${BG_LOGIN?.src})`,
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
        >
            <div className="pt-[50px] flex flex-col items-center">
                <Image
                    alt='logo'
                    src={logo}
                    className={`mt-[1vw] mb-[2vw]`}
                    objectFit="cover"
                    style={{
                        width: `${logoWidth}`
                    }}
                />
                {children}
                <p
                    className={`font-[Sans] text-[0.83vw] mt-[1.3vw]`}
                    style={{
                        color: `${GRAY_COLOR}`
                    }}
                >
                    {footer}
                </p>
            </div>
        </div>
    )
}

export default BackgroundLogin