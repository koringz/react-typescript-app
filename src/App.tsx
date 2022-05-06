import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, HashRouter, Redirect, Routes, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { Provider } from 'react-redux'
import store from '@/store/store'

import { Load } from '@/routes/index'
import { SetRoutes } from '@/routes/baseRoute'
import { DefaultLayout } from '@/layout'

// 对登陆进行判断
const isLogin = () => {
    return sessionStorage.getItem('token') ? true : false
}


const Login = SetRoutes.find((v: any) => '/login' === v.key) as any
const Nofound = SetRoutes.find((v: any) => '/404' === v.key) as any
class App extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Routes>
                        <Redirect exact from="/" to="/home" />
                        <Route
                            path={'/login'}
                            render={(routeProps: any) =>
                                isLogin() ? <Redirect exact from="/" to="/home" /> : <Load {...Login} />
                            }
                        />
                        <Route path={'/404'} render={(routeProps: any) => <Load {...Nofound} />} />
                        <Route path={'/'} render={(routeProps: any) => <DefaultLayout {...routeProps} />} />
                    </Routes>
                </HashRouter>
            </Provider>
        )
    }
}

export default hot(App)


