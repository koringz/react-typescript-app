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

import Routes from '@/routes/baseRoute'
import ComponentWillLoad, { Load } from '@/routes/index'

console.log(Routes)

const Nofound = Routes.find((v: any) => '/404' === v.path) as any
const Login = Routes.find((v: any) => '/login' === v.path) as any
const Home = Routes.find((v: any) => '/home' === v.path) as any
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    {/* <Route path={'/home'} render={routeProps => <Load {...Home} />} /> */}
                    <Route path={'/login'} render={routeProps => <Load {...Login} />} />
                    <Route path={'/404'} render={routeProps => <Load {...Nofound} />} />
                    <ComponentWillLoad config={Routes} />
                </Switch>
            </HashRouter>
        )
    }
}

export default hot(App)
