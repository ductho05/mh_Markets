"use client"
import React from 'react'
import DepositItem from '../Deposit/DepositItem'
import { useSearchParams } from 'next/navigation'
import { Button, Form, Input, Modal, Radio, Select } from 'antd'
import Image from 'next/image'
import styles from './WithDrawal.module.css'

const datas = [
    {
        type: "MT4",
        support: "remittance payment, digital currency withdrawal"
    },
    {
        type: "MT5",
        support: "remittance payment, digital currency withdrawal"
    }
]
function WithDrawalList() {

    const search = useSearchParams()
    const [mtServer, setMtServer] = React.useState()
    const [currentBankAccount, setCurrentBankAccount] = React.useState({
        type: "Techcombank",
        number: "123456789",
        branch: "Thủ Đức",
        code: "00000111",
        image: 'https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126090.jpg'
    })
    const [openForm, setOpenForm] = React.useState(false)
    const [isDefault, setIsDefault] = React.useState()

    React.useEffect(() => {

        if (search.get("mt_server")) {
            setMtServer(search.get("mt_server"))
        } else {
            setMtServer(null)
        }
    }, [search.get("mt_server")])

    const handleDrawal = (data) => {

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
            <Modal
                title="Bank Card Information"
                open={openForm}
                onCancel={() => setOpenForm(false)}
                width="50vw"
                okButtonProps={{
                    hidden: true
                }}
                cancelButtonProps={{
                    hidden: true
                }}
            >
                <div className={styles.forms}>
                    <Form
                        // onFinish={handleDrawal}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Payee Name"
                            name="payee_name"
                        >
                            <Input type="text" placeholder='Enter payee name' />
                        </Form.Item>
                        <div className='flex items-center w-full'>
                            <Form.Item
                                label="Bank Card Name"
                                name="type"
                                className='w-1/2 mr-[20px]'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter a bank card name'
                                    }
                                ]}
                            >
                                <Input type="text" placeholder='Enter a bank card name' />
                            </Form.Item>
                            <Form.Item
                                label="Bank account number"
                                name="number"
                                className='w-1/2'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter a bank card number'
                                    }
                                ]}
                            >
                                <Input type="text" placeholder='Enter a bank card number' />
                            </Form.Item>
                        </div>
                        <div className='flex items-center w-full'>
                            <Form.Item
                                label="Branch"
                                name="branch"
                                className='w-1/2 mr-[20px]'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter a branch name'
                                    }
                                ]}
                            >
                                <Input type="text" placeholder='Enter branch name' />
                            </Form.Item>
                            <Form.Item
                                label="Bank address"
                                name="bank_address"
                                className='w-1/2'
                            >
                                <Input type="text" placeholder='Enter a bank address' />
                            </Form.Item>
                        </div>
                        <div className='flex items-center w-full'>
                            <Form.Item
                                label="Province"
                                name="province"
                                className='w-1/2 mr-[20px]'
                            >
                                <Input type="text" placeholder='Enter province' />
                            </Form.Item>
                            <Form.Item
                                label="city"
                                name="city"
                                className='w-1/2'
                            >
                                <Input type="text" placeholder='Enter a city' />
                            </Form.Item>
                        </div>
                        <div className='flex items-center w-full'>
                            <Form.Item
                                label="Country"
                                name="country"
                                className='w-1/2 mr-[20px]'
                            >
                                <Input type="text" placeholder='Enter country' />
                            </Form.Item>
                            <Form.Item
                                label="Detail Address"
                                name="detail address"
                                className='w-1/2'
                            >
                                <Input type="text" placeholder='Enter detail address' />
                            </Form.Item>
                        </div>
                        <div className='flex items-center w-full'>
                            <Form.Item
                                label="Bank Swift Code"
                                name="code"
                                className='w-1/2 mr-[20px]'
                            >
                                <Input type="text" placeholder='Enter code' />
                            </Form.Item>
                            <div>
                                <p>
                                    <span className='text-red-500 font-[500] mr-[6px]'>*</span>
                                    Default WithDrawal Bank Card
                                </p>
                                <div>
                                    <Radio onChange={() => setIsDefault(true)} checked={isDefault === true}>
                                        Yes
                                    </Radio>
                                    <Radio onChange={() => setIsDefault(false)} checked={isDefault === false}>No</Radio>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>
                                <span className='text-red-500 font-[500] mr-[6px]'>*</span>
                                Bank Card Picture
                            </p>
                            <div className='mt-[20px]'>
                                <input type="file" id="bankCardPicture" name="bankCardPicture" style={{
                                    display: 'none'
                                }} />
                                <label for="bankCardPicture" className='px-[10px] py-[6px] cursor-pointer rounded-[12px] bg-[#f0f2f5]'>
                                    Upload picture
                                </label>
                            </div>
                        </div>

                        <Form.Item
                            style={{
                                width: '44vw',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Button className='mt-[20px] border-none bg-[#c6222f] text-white' htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
            {
                !mtServer &&
                <div className='grid gap-[20px] grid-cols-2'>
                    {
                        datas.map(data => (
                            <DepositItem type={"withdrawal"} key={data.type} data={data} />
                        ))
                    }
                </div>
            }
            {
                mtServer &&
                <div className='flex'>
                    <Form
                        onFinish={handleDrawal}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Transfer out of MT account"
                            name="mt_account"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter MT account!',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: '44vw',
                                }}
                                placeholder="Please select MT account"
                                allowClear
                            >
                                <Select.Option value="ms_pay">MT4: Account 1</Select.Option>
                                <Select.Option value="ms_pay">MT4: Account 2</Select.Option>
                                <Select.Option value="ms_pay">MT4: Account 3</Select.Option>
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

                        <div className='flex items-center justify-end'>
                            <p onClick={() => setOpenForm(true)} className='text-[13px] font-[500] text-red-500 cursor-pointer'>
                                Edit Card
                            </p>
                            <p className='text-[13px] ml-[40px] font-[500] text-red-500 cursor-pointer'>
                                Add new Bank Card
                            </p>
                        </div>
                        <Form.Item
                            label="Bank Card Information"
                            name="bankCard"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter a bank card',
                                },
                            ]}
                        >
                            <Select
                                style={{
                                    width: '44vw',
                                }}
                                placeholder="Please select a bank card"
                                defaultValue={{ label: `${currentBankAccount.type}: ${currentBankAccount.number}` }}
                            >
                                <Select.Option value="">{`${currentBankAccount.type}: ${currentBankAccount.number}`}</Select.Option>
                            </Select>
                            <div className='flex mt-[20px] p-[20px] border rounded-[6px]'>
                                <Image src={currentBankAccount.image} alt="bank image" width={100} height={100} className="object-contain" />
                                <div className='ml-[20px]'>
                                    <p>
                                        {currentBankAccount.type}
                                    </p>
                                    <div className='flex items-center'>
                                        <p className='font-[500] text-[#999]'>
                                            Bank account number:
                                        </p>
                                        <p className='ml-[6px]'>
                                            {currentBankAccount.number}
                                        </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='font-[500] text-[#999]'>
                                            Branch:
                                        </p>
                                        <p className='ml-[6px]'>
                                            {currentBankAccount.branch}
                                        </p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='font-[500] text-[#999]'>
                                            Swift code:
                                        </p>
                                        <p className='ml-[6px]'>
                                            {currentBankAccount.code}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Form.Item>

                        <Form.Item
                            label="Notes"
                            name="notes"
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

export default WithDrawalList