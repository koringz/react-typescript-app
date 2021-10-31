/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const Dash: React.FC = (props): React.ReactElement => {
    console.log(props)
    return (
        <div>
            <Layout>
                <Content>Dash 12312312</Content>
                <Content>Dash 12312312</Content>
                <Content>Dash 12312312</Content>
                <Content>Dash 12312312</Content>
            </Layout>
        </div>
    )
}

export default Dash
