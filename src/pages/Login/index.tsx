import React, { Component } from 'react'
import { Form, Input, Button, Modal, Checkbox } from 'antd'
import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { FormInstance } from 'antd/es/form'

import '@/pages/Login/index.scss'

class WrappedNormalLoginForm extends React.PureComponent {
    formRef = React.createRef<FormInstance>()
    state = { visible: false }
    constructor(props: any) {
        super(props)
    }
    onFill = (values: any) => {
        console.log('onFill:', values)
    }
    onFinish = (values: any) => {
        const { history } = this.props as any
        sessionStorage.token = values.username
        history.push({
            pathname: '/home'
        })
        console.log('Success:', this)
    }
    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }

    render() {
        return (
            <section className="rc-login">
                <section className="login-page">
                    <Form
                        name="basic"
                        className="login-page"
                        ref={this.formRef}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            className="text"
                            label=""
                            name="username"
                            rules={[{ required: true, message: '请输入你的用户名!' }]}
                        >
                            <Input placeholder="请输入你的用户名" />
                        </Form.Item>
                        <Form.Item label="" name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
                            <Input.Password placeholder="请输入你的密码" />
                        </Form.Item>
                        {/* <Form.Item name="remember" valuePropName="checked" className="tal">
                            <Checkbox>记住我</Checkbox>
                        </Form.Item> */}
                        <Form.Item>
                            <Button htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </section>
            </section>
        )
    }
}

export default WrappedNormalLoginForm
