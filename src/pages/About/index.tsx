/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

class About extends React.Component {
    render() {
        return (
            <Layout>
                <Header>About 关于</Header>
                <Content>About 关于</Content>
                <Footer>About 关于</Footer>
            </Layout>
        )
    }
}

export default About
