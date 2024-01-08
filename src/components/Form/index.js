"use client"
import { WHITE_COLOR, PRIMARY_COLOR, GRAY2_COLOR } from '@/assets/colors/Colors'
import React, { useState } from 'react'
import { Button, Dropdown, Checkbox } from 'antd';
import Global from '@/assets/logo/Global.png'
import Image from 'next/image';
import Link from 'next/link';
import { message } from 'antd';

function Form({
    title,
    inputs,
    rememberMe,
    links,
    watch,
    errors,
    handleSubmit }) {
    const items = [
        {
            key: '1',
            label: (
                <p className='text-[0.83vw]' onClick={(e) => handleChooseLanguage(e)}>
                    简体中文
                </p>
            )
        },
        {
            key: '2',
            label: (
                <p className='text-[0.83vw]' onClick={(e) => handleChooseLanguage(e)}>
                    English
                </p>
            )
        },
        {
            key: '3',
            label: (
                <p className='text-[0.83vw]' onClick={(e) => handleChooseLanguage(e)}>
                    繁体中文
                </p>
            )
        },
        {
            key: '4',
            label: (
                <p className='text-[0.83vw]' onClick={(e) => handleChooseLanguage(e)}>
                    Tiếng việt
                </p>
            )
        }
    ]
    const [language, setLanguage] = useState(items[1].label)
    const [checked, setChecked] = useState(false)
    const [messageApi, contextHolder] = message.useMessage()
    const handleChooseLanguage = (e) => {
        setLanguage(e.target.innerText)
    }

    const handleChecked = () => {
        if (Object.keys(errors).length > 0 || watch("email") === "" || watch("password") === "") {
            messageApi.open({
                type: 'warning',
                content: "Email and password cannot be empty",
                className: 'warning'
            });
        } else {
            setChecked(prev => !prev)
        }
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    const onError = () => {
        messageApi.open({
            type: 'error',
            content: 'Email and password cannot be empty',
            className: 'error'
        });
    }

    return (
        <>
            {contextHolder}
            <form onSubmit={handleSubmit(onSubmit, onError)}
                className={`py-[2vw] px-[1.5vw] rounded-[0.4vw]`}
                style={{
                    backgroundColor: `${WHITE_COLOR}`
                }}
            >
                <div className="flex justify-between items-center">
                    <p className='text-[#606266] text-[1vw]'>{title}</p>
                    <Dropdown
                        className='flex items-center justify-center text-[0.83vw] !text-[#bdbbbf]'
                        menu={{
                            items,
                        }}
                        trigger="click"
                        placement="bottom"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className='py-[0] px-[10px] text-[#606266] h-[2vw] shadow-none rounded-[4px] border border-[#f6f8fa] hover:!text-[#606266] hover:!border-[#f6f8fa]'
                            icon={
                                <Image
                                    src={Global}
                                    className='w-[0.729167vw] h-[0.729167vw]'
                                    objectFit='cover'
                                />
                            }>
                            {language}
                        </Button>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center py-[10px]">
                    {
                        inputs?.map((Input, index) => (
                            <div key={`input${index}`}>
                                {Input}
                            </div>
                        ))
                    }
                </div>
                <div className='mb-[10px] mt-[5px] flex items-end justify-between'>
                    {
                        rememberMe &&
                        <Checkbox
                            checked={checked}
                            onChange={handleChecked}
                            className='text-[0.83vw]'
                        >
                            Remember Me
                        </Checkbox>
                    }
                    <div className=''>
                        {
                            links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link?.path}
                                    className='text-[0.72vw]'
                                    style={{
                                        color: `${GRAY2_COLOR}`
                                    }}
                                >
                                    {link?.label}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <input
                    value={title}
                    type="submit"
                    className={`cursor-pointer text-[0.83vw] rounded-[0.23vw] font-[Sans] h-[2.3vw] text-white hover:!text-white w-full shadow-none`}
                    style={{
                        backgroundColor: `${PRIMARY_COLOR}`
                    }}
                />
            </form>
        </>
    )
}

export default Form