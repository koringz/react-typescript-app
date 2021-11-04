/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { Layout, Button } from 'antd'
const { Header, Footer, Sider, Content } = Layout

class About extends React.Component {
    state = {
        size: 'large'
    }
    handleSizeChange = (e: any) => {
        this.setState({ size: e.target.value })
    }

    render() {
        const { size } = this.state
        return (
            <Layout>
                <Content>
                    <Button type="primary" size={size}>
                        Download
                    </Button>
                    <Button type="link" block>
                        Link
                    </Button>
                    About 关于
                </Content>
            </Layout>
        )
    }
}

export default About
