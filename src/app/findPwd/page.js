"use client"
import BackgroundLogin from '@/components/BackgroundLogin'
import React from 'react'
import Mohicans from '@/assets/logo/Mohicans.png'
import Form from '@/components/Form'
import { useForm } from 'react-hook-form'
import InputItem from '@/components/Input'
import verificationCode from '@/assets/code/verificationCode.png'
import { KeyOutlined, MailFilled } from '@ant-design/icons'

const links = [
    {
        label: 'Sign In',
        path: '/login'
    }
]

function FindPwd() {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm()

    const inputs = [
        <InputItem
            key="emailInput"
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
            key="verifiInput"
            type='code'
            placeholder='Please enter the vetification code'
            icon={<KeyOutlined className='text-red-500 text-[1.1vw]' />}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="23vw"
            verificationCode={verificationCode}
        />
    ]

    return (
        <>
            <BackgroundLogin
                logo={Mohicans}
                logoWidth="13vw"
                footer={'©2023 MOHICANS MARKETS'}
            >
                <Form
                    title='Retrieve Password'
                    inputs={inputs}
                    action={{ api: '' }}
                    links={links}
                    watch={watch}
                    errors={errors}
                    handleSubmit={handleSubmit}
                />
            </BackgroundLogin>
        </>
    )
}

export default FindPwd