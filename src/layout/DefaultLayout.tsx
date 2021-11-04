import React from 'react'
import { Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const { Sider, Header, Content, Footer } = Layout

import { AppSidebar, AppFooter, AppHeader, AppBreadcrumb } from '../components/index'
import ComponentWillLoad from '@/routes/index'
import PermissionRoutes from '@/routes/baseRoute'
import './index.scss'

const div1 = {
    backgroundColor: '#eee', //驼峰法
    width: 'calc(100% - 256px)',
    float: 'right',
    padding: '8px 12px'
}

const DefaultLayout = (props: any) => {
    // console.log(props)
    return (
        <Layout style={{ height: '100%' }}>
            <AppHeader />
            <div className="wrapper">
                <div style={{ height: 'calc(100vh - 64px)', overflowY: 'auto', float: 'left', width: '256px', background: '#fff' }}>
                    <Switch>
                        <AppSidebar menus={PermissionRoutes} />
                    </Switch>
                </div>
                <div className="archive" style={div1}>
                    <AppBreadcrumb />
                    <TransitionGroup className="layout__route">
                        <CSSTransition key={location.pathname} classNames="layout__route" timeout={300}>
                            <Switch>
                                {/* <SiderNav menus={setRoutes}/> */}
                                <ComponentWillLoad config={PermissionRoutes} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
            <AppFooter />
        </Layout>
    )
}

export default withRouter(DefaultLayout)
