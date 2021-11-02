import React from 'react'
import { Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { AppSidebar, AppFooter, AppHeader } from '../components/index'
import ComponentWillLoad from '@/routes/index'
import Routes from '@/routes/baseRoute'

import './index.scss'
import { Layout } from '_antd@4.16.13@antd'

const div1 = {
    backgroundColor: '#44014C', //驼峰法
    width: 'calc(100% - 256px)',
    float: 'right'
}

const DefaultLayout = (props: any) => {
    console.log(props)
    return (
        <Layout style={{ height: "100%"}}>
            <AppHeader />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <AppSidebar />
                <div className="archive" style={div1}>
                    <Switch>
                        <ComponentWillLoad config={Routes} />
                    </Switch>
                </div>
            </div>
            <AppFooter />
        </Layout>
    )
}

export default withRouter(DefaultLayout)
