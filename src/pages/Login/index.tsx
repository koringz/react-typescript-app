import React, { Component } from 'react'
import { Form, Input, Button, Modal, Checkbox } from 'antd'
import { AppstoreOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { FormInstance } from 'antd/es/form'

import '@/pages/Login/index.scss'

class WrappedNormalLoginForm extends Component {
    formRef = React.createRef<FormInstance>()
    state = { visible: false }
    constructor(props: any) {
        super(props)
    }
    onFill = (values: any) => {
    }
    onFinish = (values: any) => {
        const { history } = this.props as any
        sessionStorage.token = values.username
        history.push({
            pathname: '/home'
        })
    }
    onFinishFailed = (errorInfo: any) => {
    }

    render() {
        return (
            <section className="rc-login">
                <section className="login-page">
                    <Form
                        name="basic"
                        className="login-page"
                        autoComplete="off"
                        ref={this.formRef}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label=""
                            name="username"
                            className="text"
                            rules={[{ required: true, message: '请输入你的用户名!' }]}
                        >
                            <Input placeholder="请输入你的用户名" />
                        </Form.Item>
                        <Form.Item label="" name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
                            <Input.Password placeholder="请输入你的密码" />
                        </Form.Item>
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
