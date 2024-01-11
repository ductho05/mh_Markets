"use client"
import React from 'react'
import DepositItem from './DepositItem'
import { useSearchParams } from 'next/navigation'
import { Form, Input, Select, Button } from 'antd'

const datas = [
    {
        type: "MT4",
        support: "online deposit, wire transfer deposit, digital currency deposit, internal deposit"
    },
    {
        type: "MT5",
        support: "online deposit, wire transfer deposit, digital currency deposit, internal deposit"
    }
]
function DepositList() {

    const searchParams = useSearchParams()
    const [mtServer, setMtServer] = React.useState()

    React.useEffect(() => {

        if (searchParams.get("mt_server")) {
            setMtServer(searchParams.get("mt_server"))
        } else {
            setMtServer(null)
        }
    }, [searchParams.get("mt_server")])

    const handleDeposit = (data) => {

        console.log(data)
    }

    return (
        <div
            style={{
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                borderBottomLeftRadius: '12px',
            }}
            className='p-[20px] bg-white'
        >
            {
                !mtServer &&
                <div className='grid gap-[20px] grid-cols-2'>
                    {
                        datas.map(data => (
                            <DepositItem type={"deposit"} key={data.type} data={data} />
                        ))
                    }
                </div>
            }
            {
                // mtServer === "MT4" &&
                mtServer &&
                <div className='flex'>
                    <Form
                        onFinish={handleDeposit}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Payment Channel"
                            name="payment_channel"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter payment channel!',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: '44vw',
                                }}
                                placeholder="Please select a payment channel"
                                allowClear
                            >
                                <Option value="ms_pay">MSpay (USDT)</Option>
                                <Option value="mt5">AWEpay (VND, MYR, THB)</Option>
                                <Option value="mt5">Long77 (VND)</Option>
                                <Option value="mt5">MyPay (VND)</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Payment Currency"
                            name="payment_currency"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter payment currency!'
                                }
                            ]}
                        >
                            <Select
                                style={{
                                    width: '44vw',
                                }}
                                placeholder="Please select a payment currency"
                                allowClear
                            >

                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Transfer to MT Account"
                            name="mt_account"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter a MT account',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: '44vw',
                                }}
                                placeholder="Please select a MT account"
                                allowClear
                            >

                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Amount transferred to base currency"
                            name="amount"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter amount transferred',
                                },
                            ]}
                        >
                            <Input type="number" placeholder="Please enter amount transferred" addonAfter="USD" />
                        </Form.Item>
                        <Form.Item
                            label="Note"
                            name="note"
                        >
                            <Input.TextArea style={{ width: '44vw' }} showCount maxLength={200} rows={4} placeholder="Please enter a note" />
                        </Form.Item>
                        <Form.Item
                            style={{
                                width: '44vw',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button className='border-none bg-[#c6222f] text-white' htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            }
        </div>
    )
}

export default DepositList