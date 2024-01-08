"use client"
import React from 'react'
import BackgroundLogin from '@/components/BackgroundLogin'
import MHMarkets from '@/assets/logo/MHMarkets.png'
import Form from '@/components/Form'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { KeyOutlined, MailFilled, PhoneFilled, SettingFilled, UserOutlined, VerifiedOutlined } from '@ant-design/icons'
import InputItem from '@/components/Input'

function Register() {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm()

    const inputs = [
        <InputItem
            key="emailRegisterInput"
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
            key="realNameRegisterInput"
            type='real_name'
            placeholder='Please enter your real name'
            icon={<UserOutlined className='text-red-500 text-[1.1vw]' />}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="30vw"
        />,
        <InputItem
            key="phoneRegisterInput"
            type='phone'
            placeholder='Please enter your Mobile Number'
            icon={<PhoneFilled className='text-red-500 text-[1.1vw]' />}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="30vw"
        />,
        <InputItem
            key="referralRegisterInput"
            type='referral_code'
            placeholder='Please enter the referral code/optional'
            icon={<SettingFilled className='text-red-500 text-[1.1vw]' />}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="30vw"
        />,
        <InputItem
            key="passwordRegisterInput"
            type='password'
            placeholder='Please enter password'
            icon={<KeyOutlined className='text-red-500 text-[1.1vw]' />}
            isPassword={true}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="30vw"
        />,
        <InputItem
            key="confirmRegisterInput"
            type='confirm_password'
            placeholder='Please enter confirmation password'
            icon={<KeyOutlined className='text-red-500 text-[1.1vw]' />}
            isPassword={true}
            register={register}
            rule={{ required: true }}
            watch={watch}
            setValue={setValue}
            width="30vw"
        />,
        <InputItem
            key="verifiRegisterInput"
            type='verify_code'
            placeholder='Please enter the email verifi'
            icon={<VerifiedOutlined className='text-red-500 text-[1.1vw]' />}
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
            logoWidth="10vw"
            footer={'©2023 MOHICANS MARKETS'}
        >
            <Form
                title='Register'
                inputs={inputs}
                action={{ api: '' }}
                rememberMe={false}
                links={[]}
                watch={watch}
                errors={errors}
                handleSubmit={handleSubmit}
            />
            <div className='text-[0.83vw] font-[Sans] flex items-center mt-[20px]'>
                <p>
                    Already have an Account?
                </p>
                <Link href="/login" className='text-[#0bb197] ml-[8px]'>
                    Login
                </Link>
            </div>
        </BackgroundLogin>
    )
}

export default Register