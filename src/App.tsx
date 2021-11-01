import React, { Suspense, useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Redirect,
    Switch,
    Route,
    Link,
    RouteComponentProps
} from 'react-router-dom'
import { hot } from 'react-hot-loader/root'

import { Load } from '@/routes/index'
import Routes from '@/routes/baseRoute'
import DefaultLayout from '@/layout/DefaultLayout'

const Nofound = Routes.find((v: any) => '/404' === v.path) as any
const Login = Routes.find((v: any) => '/login' === v.path) as any
const Home = Routes.find((v: any) => '/home' === v.path) as any
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
