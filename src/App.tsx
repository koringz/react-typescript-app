import React, { Suspense, useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Redirect,
    Switch,
    Route,
} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import { Load } from '@/routes/index'
import { SetRoutes } from '@/routes/baseRoute'
import DefaultLayout from '@/layout/DefaultLayout'

const Login = SetRoutes.find((v: any) => '/login' === v.key) as any
const Nofound = SetRoutes.find((v: any) => '/404' === v.key) as any
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path={'/login'} render={routeProps => <Load {...Login} />} />
                    <Route path={'/404'} render={routeProps => <Load {...Nofound} />} />
                    <Route path={'/'} render={(routeProps: any) => <DefaultLayout {...routeProps} />} />
                </Switch>
            </HashRouter>
        )
    }
}

export default hot(App)
