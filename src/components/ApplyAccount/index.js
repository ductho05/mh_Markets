import { Button, Form, Input, Select } from 'antd'
import React from 'react'

const { Option } = Select
function ApplyAccount() {

    const handleApply = (data) => {

        console.log(data)
    }

    return (
        <div
            style={{
                borderTopRightRadius: '12px',
                borderBottomRightRadius: '12px',
                borderBottomLeftRadius: '12px',
            }}
            className='p-[20px] bg-white grid gap-[20px] grid-cols-3'
        >
            <Form
                onFinish={handleApply}
                layout="vertical"
            >
                <Form.Item
                    label="MT Flatform"
                    name="flatform"
                    rules={[
                        {
                            required: true,
                            message: 'This Option is mandatory!',
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '40vw',
                        }}
                        placeholder="Please select MT Flatform"
                        allowClear
                    >
                        <Option value="mt4">MT 4</Option>
                        <Option value="mt5">Mt 5</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Account Type"
                    name="type"
                    rules={[
                        {
                            required: true,
                            message: 'This Option is mandatory!',
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '40vw',
                        }}
                        placeholder="Please select an account type"
                        allowClear
                    >

                    </Select>
                </Form.Item>

                <Form.Item
                    label="Leverage"
                    name="leverage"
                    rules={[
                        {
                            required: true,
                            message: 'This Option is mandatory!',
                        },
                    ]}
                >
                    <Select
                        style={{
                            width: '40vw',
                        }}
                        placeholder="Please select an account type"
                        allowClear
                    >

                    </Select>
                </Form.Item>
                <Form.Item
                    label="Note"
                    name="note"
                >
                    <Input.TextArea style={{ width: '40vw' }} showCount maxLength={200} rows={4} placeholder="Please enter a note" />
                </Form.Item>
                <Form.Item
                    style={{
                        width: '40vw',
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
    )
}

export default ApplyAccount