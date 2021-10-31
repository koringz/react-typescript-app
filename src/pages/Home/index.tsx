/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Redirect,
    Switch,
    Route,
    Link,
    RouteComponentProps,
    withRouter
} from 'react-router-dom'
import ComponentWillLoad, { Load } from '@/routes/index'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const Home: React.FC = (props): React.ReactElement => {
    const { location, history, routes } = props
    const { children } = routes
    location.pathname = '/home/sub'
    console.log('home============', routes.children)
    return (
        <div>
            <Layout>
                <Header>Header</Header>
                <Content>
                    {/* <Switch>
                        <Redirect from="/home" to="/home/sub" />
                        {children.map((item: any) => (
                            <ComponentWillLoad config={children} />
                        ))}
                    </Switch> */}
                    <Link to={'/home/sub'}>跳转子页面</Link>
                </Content>
                <Footer>跳转子页面</Footer>
            </Layout>
        </div>
    )
}

export default withRouter(Home)
