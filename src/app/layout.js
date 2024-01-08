import DefaultLayout from '@/components/DefaultLayout'
import { APP_NAME } from '@/utils/constants'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    // title: '登录-Mohicans Markets CRM'
    title: `Front Page-${APP_NAME}`
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
            </head>
            <body className={inter.className}>
                <DefaultLayout>
                    {children}
                </DefaultLayout>
            </body>
        </html>
    )
}
