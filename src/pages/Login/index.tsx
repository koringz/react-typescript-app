/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Login</Header>
                    <Content>Login 登陆</Content>
                    <Footer>Login</Footer>
                </Layout>
            </div>
        )
    }
}

// export default withRouter(connect()(Login))
