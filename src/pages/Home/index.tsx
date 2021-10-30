/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import { Link } from 'react-router-dom'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

// class Home extends React.Component {
//     render() {
//         return (
//             <div>
//                 {/* something */}123
//                 <div>
//                     <Link to="./table">table</Link>
//                 </div>
//             </div>
//         )
//     }
// }
class Home extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}

export default Home
