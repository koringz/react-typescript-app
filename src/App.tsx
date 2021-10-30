import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, HashRouter, Redirect, Switch, Route, Link } from 'react-router-dom'
import { render } from '_@types_react-dom@17.0.9@@types/react-dom'

const LoadComponent = <T extends React.ComponentType<any>>(
    factory: () => Promise<{
        default: T
    }>
) => {
    const LFC = React.lazy(factory)
    return function (props: any) {
        return <LFC {...props}></LFC>
    }
}

/**
 * name 路由名称
 * needLogin 路由是否需要权限验证
 * title 访问路由设置 meta 标题
 * icon 访问路由设置 menu 菜单icon
 */
const routes = [
    {
        path: '/table',
        name: 'table',
        needLogin: true,
        title: '表格',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Table/index.tsx'))
    },
    {
        path: '/home',
        name: 'home',
        needLogin: true,
        title: '主页',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Home/index.tsx'))
        // children: [
        //     {
        //         path: '/home/sub',
        //         title: '子菜单',
        //         icon: 'bars',
        //         children: [
        //             {
        //                 title: '孙子菜单-one',
        //                 path: '/home/sub/one',
        //                 component: LoadComponent(() => import('@/pages/Home/index.tsx'))
        //             },
        //             {
        //                 title: '孙子菜单-two',
        //                 path: '/home/sub/two',
        //                 component: LoadComponent(() => import('@/pages/Home/index.tsx'))
        //             }
        //         ]
        //     }
        // ]
    },
    {
        path: '/404',
        name: '404',
        needLogin: true,
        title: '404界面',
        icon: 'bars',
        component: LoadComponent(() => import('@/components/404.tsx'))
    },
    {
        path: '/',
        name: '/',
        redirect: 'home',
        needLogin: true,
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Home/index.tsx'))
    },
    {
        path: '/login',
        name: 'Login',
        needLogin: true,
        title: '登陆界面',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Login/index.tsx'))
    },
    {
        path: '/about',
        name: 'About',
        needLogin: false,
        title: '关于',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Login/index.tsx'))
    }
]

const Load = (Comp: any) => {
    // component 未必选
    const Com = Comp.component
    if (!Com) return null
    return (
        <Suspense fallback={<div className="define-suspense">loading</div>}>
            <Com />
        </Suspense>
    )
}

/**
 * isLogin 非登陆状态下
 * 访问默认无权限路由
 * needLogin = false
 *
 * isLogin 登陆状态下
 * 路由合法
 * 路由不合法
 *
 * isLogin 非登陆状态下
 * 路由合法
 * 路由不合法
 */
class PermissionAuth extends React.Component {
    isLogin() {
        // 对登陆进行判断
        return sessionStorage.getItem('token') ? true : false
    }
    render() {
        const { location, config } = this.props
        const { pathname } = location
        const isLogin = this.isLogin()
        console.log(isLogin)
        console.log(pathname)
        // console.log(config)

        // 是否存在用户搜寻路由目标
        const targetRouterConfig = config.find((v: any) => v.path === pathname)
        const Login = routes.find((v: any) => '/login' === v.path) as any
        const Home = routes.find((v: any) => '/home' === v.path) as any

        // 访问默认无权限路由
        if (targetRouterConfig && !targetRouterConfig.needLogin && !isLogin) {
            return <Route path={pathname} render={routeProps => <Load {...targetRouterConfig} />} />
        }

        // isLogin 登陆状态下
        if (isLogin) {
            // 如果是登陆状态,想要跳转到登陆,重定向到主页
            if (pathname === '/login') {
                return (
                    <Switch>
                        <Route path={'/home'} render={routeProps => <Load {...Login} />} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                )
            } else {
                // 如果路由合法,就跳转到相应的路由
                if (targetRouterConfig) {
                    return <Route path={pathname} render={routeProps => <Load {...targetRouterConfig} />} />
                } else {
                    // 如果路由不合法,重定向到 404 页面
                    return <Redirect to="/404" />
                }
            }
        }
        // isLogin 非登陆状态下
        else {
            // 路由合法
            if (targetRouterConfig && targetRouterConfig.needLogin) {
                return (
                    <Switch>
                        <Route path={'/login'} render={routeProps => <Load {...Login} />} />
                        <Redirect to="/login" />
                    </Switch>
                )
            } else {
                // 非登陆状态下,路由不合法时, 重定向至 404
                return <Redirect to="/404" />
            }
        }
    }
}

const Nofound = routes.find((v: any) => '/404' === v.path) as any
class ComponentWillLoad extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={'/404'} render={routeProps => <Load {...Nofound} />} />
                <PermissionAuth config={routes}></PermissionAuth>
                {/* {routes.map((items, key) => (
                    <Route key={key} path={items.path} render={routeProps => <Load {...items}></Load>} />
                ))} */}
            </Switch>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <ComponentWillLoad />
                </HashRouter>
            </div>
        )
    }
}

export default App
