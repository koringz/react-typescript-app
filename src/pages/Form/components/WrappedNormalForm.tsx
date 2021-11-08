import React, { Component } from 'react'
import { Form, Input, Button, Modal, Checkbox } from 'antd'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    LinkOutlined
} from '@ant-design/icons'
import { FormInstance } from 'antd/es/form';

const FormItem = Form.Item

//form代码，没有什么改进，把下面的提交按钮去掉就行
class WrappedNormalLoginForm extends React.PureComponent {
    formRef = React.createRef<FormInstance>();
    
    state = { visible: false }

    constructor(props: any) {
        super(props)
    }
    onfinalish = () => {
        (this.formRef.current as any).validateFields().then((value: any) => {
            debugger
            if (value) {
                console.log('value==', value)
            }
        })
    }
    onFinish = (values: any) => {
        console.log('Success:', values)
    }

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo)
    }
    onFill = (errorInfo: any) => {
        (this.formRef.current as any).setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
          });
    }

    render() {
        return ( 
            <>
                <Button type="primary" onClick={() => this.setState({ visible: true })}>
                    打开弹出框
                </Button>

                <Modal
                    title="基本交易"
                    visible={this.state.visible}
                    onOk={(e: any) => {
                        console.log(e)
                        this.setState({
                            visible: false
                        })
                    }}
                    onCancel={(e: any) => {
                        console.log(e)
                        this.setState({
                            visible: false
                        })
                    }}
                    footer={[
                        <Button type="primary" onClick={this.onfinalish} key="submit">
                            确定
                        </Button>
                    ]}
                >
                    <Form
                        name="basic"
                        ref={this.formRef}
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                提交
                            </Button>
                            <Button type="link" htmlType="button" onClick={this.onFill}>
                                填充表单
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}

export default WrappedNormalLoginForm