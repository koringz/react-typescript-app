import React, { Component, useEffect, useState } from 'react'
import { Form, Input, Button, Modal, Checkbox } from 'antd'

const RCDialog = (props: any) => {
    const [form] = Form.useForm()
    const { validateFields } = form
    const [state, setState] = useState({
    })

    const handleChange = () => {
        validateFields().then((params: { [key: string]: any }) => {
            if (params) {
                props.onSure(params)
                form.resetFields()
            }
        })
    }
    useEffect(() => {
        if (props.isEdit) {
            form.setFieldsValue(props.snapshot)
        }
    })

    const { isVisible } = props as any
    return isVisible && (
        <Modal
            title="基本交易"
            okText="确定"
            cancelText="取消"
            visible={true}
            onOk={(e: any) => handleChange()}
            onCancel={() => props.onCancel()}
        >
            <Form name="basic" autoComplete="off" form={form} labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
                <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入你的用户名!' }]} >
                    <Input />
                </Form.Item>
                <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default RCDialog