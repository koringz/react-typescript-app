/*  描述: 默认 布局 模板
 *  作者: koringz
 *  日期: 2021-11-4
 */

import React from 'react'
import { Routes } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const { Sider, Header, Content, Footer } = Layout

import { AppSidebar, AppFooter, AppHeader, AppBreadcrumb } from './index'
import ComponentWillLoad from '@/routes/index'
import PermissionRoutes from '@/routes/baseRoute'

import '@/layout/DefaultLayout.scss'

const archiveSty: React.CSSProperties = {
    backgroundColor: '#eee',
    width: 'calc(100% - 256px)',
    float: 'right',
    padding: '8px 12px'
}

const DefaultLayout = (props: any) => {
    // console.log(props)
    return (
        <Layout style={{ height: '100%' }} className="rc-DefaultLayout">
            <AppHeader {...props} />
            <div className="wrapper">
                <div
                    style={{
                        height: 'calc(100vh - 64px)',
                        overflowY: 'auto',
                        float: 'left',
                        width: '256px',
                        background: '#fff'
                    }}
                >
                    <Routes>
                        <AppSidebar menus={PermissionRoutes()} />
                    </Routes>
                </div>
                <div className="archive" style={archiveSty}>
                    <AppBreadcrumb menus={PermissionRoutes()} />
                    <TransitionGroup className="layout__route">
                        <CSSTransition key={location.pathname} classNames="layout__transition" timeout={300}>
                            <Routes>
                                {/* <SiderNav menus={setRoutes}/> */}
                                <ComponentWillLoad config={PermissionRoutes()} />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
            <AppFooter />
        </Layout>
    )
}

export default withRouter(DefaultLayout)
