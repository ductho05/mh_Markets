"use client"
import React from 'react'
import BackgroundLogin from '@/components/BackgroundLogin'
import MHMarkets from '@/assets/logo/MHMarkets.png'
import Form from '@/components/Form'
import InputItem from '@/components/Input'
import { useForm } from "react-hook-form"
import { KeyOutlined, MailFilled } from '@ant-design/icons'
import Link from 'next/link'

const links = [
    {
        label: 'Forgot your Password?',
        path: '/findPwd'
    }
]
function Login() {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm()

    const inputs = [
        <InputItem
            type='email'
            placeholder='Please enter your email address'
            icon={<MailFilled className='text-red-500 text-[1.1vw]' />}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="30vw"
        />,
        <InputItem
            type='password'
            placeholder='Please enter password'
            icon={<KeyOutlined className='text-red-500 text-[1.1vw]' />}
            isPassword={true}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="30vw"
        />
    ]

    return (
        <BackgroundLogin
            logo={MHMarkets}
            logoWidth="20vw"
            footer={'©2023 MOHICANS MARKETS'}
        >
            <Form
                title='Log In'
                inputs={inputs}
                action={{ api: '' }}
                rememberMe={true}
                links={links}
                watch={watch}
                errors={errors}
                handleSubmit={handleSubmit}
            />
            <div className='text-[0.83vw] font-[Sans] flex items-center mt-[20px]'>
                <p>
                    Do not have an Account?
                </p>
                <Link href="/register" className='text-[#0bb197] ml-[8px]'>
                    Register
                </Link>
            </div>
        </BackgroundLogin>
    )
}

export default Login