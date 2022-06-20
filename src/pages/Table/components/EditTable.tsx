import React, { useEffect, useState } from 'react'
// import Editable from 'antd-editable'
import { Form, Input, Modal } from 'antd'

const EditTableCom = (props: any) => {
    const dataSource = [
        {
            key: '1',
            name: '金鑫',
            age: 16,
            address: '慕和兰道304'
        },
        {
            key: '2',
            name: '张海新',
            age: 17,
            address: '慕和兰道304',
            editable: false
        },
        {
            key: '3',
            name: '李鳌',
            age: 15,
            address: '慕和兰道304'
        }
    ]

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            width: '30%'
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            width: '30%'
        },
        {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            editable: false
        }
    ]

    const [form] = Form.useForm()
    const { validateFields } = form
    const [state, setState] = useState({})

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
    function handleCellChange(nextSource: any) {
        console.log(nextSource)
    }

    const { isVisible } = props as any

    return (
        isVisible && (
            <Modal
                title="基本交易"
                okText="确定"
                cancelText="取消"
                visible={true}
                onOk={(e: any) => handleChange()}
                onCancel={() => props.onCancel()}
            >
                <Form name="basic" autoComplete="off" form={form} labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入你的用户名!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
                        <Input.Password />
                    </Form.Item>
                    {/* <Editable dataSource={dataSource} columns={columns} onCellChange={handleCellChange} bordered /> */}
                </Form>
            </Modal>
        )
    )
}

export default EditTableCom
