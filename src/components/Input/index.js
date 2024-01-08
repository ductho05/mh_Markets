"use client"
import React from 'react'
import { INPUT_COLOR } from '@/assets/colors/Colors';
import { TextField, InputAdornment } from '@mui/material';
import { EyeInvisibleFilled, EyeFilled, CloseCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';

function InputItem({
    type,
    placeholder,
    icon,
    isPassword,
    register,
    rule,
    watch,
    setValue,
    width,
    verificationCode
}) {

    const [showPassword, setShowpassword] = React.useState(false)

    const toggleShowPassword = () => {
        setShowpassword(prev => !prev)
    }

    const handleClearValue = () => {
        setValue(type, '')
    }

    return (
        <div className='flex'>
            {
                verificationCode &&
                <Image src={verificationCode} className="w-[6.7vw] h-[2.2vw] mr-[0.3vw] cursor-pointer" />
            }
            <TextField
                {...register(type, rule)}
                name={type}
                type={isPassword && !showPassword ? 'password' : 'text'}
                placeholder={placeholder}
                size='medium'
                style={{
                    outline: 'none',
                    width: `${width}`
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        border: 'none',
                        borderRadius: "4px",
                        padding: "0",
                        height: "2.2vw",
                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                        padding: "0"
                    },
                    "& .MuiInputBase-input": {
                        backgroundColor: 'transparent',
                        padding: "0"
                    }
                }}
                InputProps={{
                    style: {
                        color: "#606266",
                        fontSize: "0.83vw",
                        marginBottom: '20px',
                        backgroundColor: `${INPUT_COLOR}`,
                        padding: "0 10px"
                    },
                    startAdornment: (
                        icon && (
                            <InputAdornment position="start" >
                                <div className={`pr-[10px] mr-[20px] border-r border-solid border-[#606266]`}>
                                    {icon}
                                </div>
                            </InputAdornment>
                        )
                    ),
                    endAdornment: (

                        <InputAdornment
                            position="end"
                            className='cursor-pointer relative text-[0.83vw]'
                        >
                            {
                                watch(type) &&
                                <CloseCircleOutlined
                                    className='text-[#a0a0a0] absolute right-[20px]'
                                    onClick={handleClearValue}
                                />
                            }
                            {
                                isPassword && (
                                    showPassword ?
                                        <EyeFilled onClick={toggleShowPassword} />
                                        : <EyeInvisibleFilled onClick={toggleShowPassword} />
                                )
                            }
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}

export default InputItem