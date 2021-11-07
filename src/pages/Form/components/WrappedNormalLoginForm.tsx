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

const FormItem = Form.Item

//form代码，没有什么改进，把下面的提交按钮去掉就行
class WrappedNormalLoginForm extends Component {
    formRef = React.createRef()
    state = { visible: false }

    onfinalish = () => {
        const current = this.formRef.current as any
        current.validate().then((value: any) => {
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
    constructor(props: any) {
        super(props)
        // this.formRef = React.createRef();
    }

    render() {
        // const getform = (this.props as any)
        // console.log(getform)
        // const { getFieldDecorator } = (this.props as any)
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
                            提交
                        </Button>
                    ]}
                >
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}

export default WrappedNormalLoginForm
// import React, { Component, useEffect } from "react";
// import { Form, Input, Button } from "antd";
// const FormItem = Form.Item;
// const nameRules = { required: true, message: "请输入姓名" };
// const passwordRules = { required: true, message: "请输入密码" };

// export default class AntdFormPage extends React.PureComponent {
//   formRef = React.createRef();
//   componentDidMount() {
//     (this.formRef as any).current.setFieldsValue({ name: "default name" });
//   }
//   onReset = () => {
//     (this.formRef as any).current.resetFields();
//   };
//   onFinish = (val: any) => {
//     console.log("onfinish", val);
//   };
//   onFinishFailed = (val: any) => {
//     console.log("onfinishfailed", val);
//   };
//   render() {
//     console.log("antd render", this.formRef.current);
//     return (
//       <div>
//         <Form
//           ref={this.formRef}
//           onFinish={this.onFinish}
//           onFinishFailed={this.onFinishFailed}
//           onReset={this.onReset}
//         >
//           <FormItem label="姓名" name="name" rules={[nameRules]}>
//             <Input placeholder="name" />
//           </FormItem>
//           <FormItem label="密码" name="password" rules={[passwordRules]}>
//             <Input placeholder="password" />
//           </FormItem>
//           <FormItem>
//             <Button type="primary" size="large" htmlType="submit">
//               submit
//             </Button>
//           </FormItem>
//           <FormItem>
//             <Button type="default" size="large" htmlType="reset">
//               reset
//             </Button>
//           </FormItem>
//         </Form>
//       </div>
//     );
//   }
// }
