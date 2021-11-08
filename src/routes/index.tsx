import React, { Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Switch, Route, withRouter } from 'react-router-dom'
import LoadingDemo from '@/components/loadingDemo'
import { deepFilterMap } from '@/utils/deepFilter'

export const Load = (Comp: any, routeProps: any) => {
    // console.log(Comp, routeProps)
    // component 未必选
    const Com = Comp.component
    if (!Com) return null
    const ComRoutes = withRouter(Com)
    return (
        <Suspense fallback={<LoadingDemo />}>
            <Switch>
                <ComRoutes {...routeProps}/>
            </Switch>
        </Suspense>
    )
}

/**
 * @default isLogin非登陆状态下
 * @description 访问默认无权限路由
 * @param needLogin=false
 *
 * @default isLogin登陆状态下
 * @description 路由合法
 * @description 路由不合法
 *
 * @param isLogin非登陆状态下
 * @description 路由合法
 * @description 路由不合法
 */
class PermissionAuth extends React.Component {
    isLogin() {
        // 对登陆进行判断
        return sessionStorage.getItem('token') ? true : false
    }
    render() {
        console.log('this.props', this.props)
        const { location, config } = this.props as any
        const { pathname } = location
        const isLogin = this.isLogin()
        // console.log(isLogin, pathname, config)

        // 是否存在用户搜寻路由目标
        const getDeepFilterMap = deepFilterMap([pathname], config)
        const targetRouterConfig = getDeepFilterMap.length ? getDeepFilterMap[0] : null

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
                        <Redirect from="/" to="/home" />
                    </Switch>
                )
            } else {
                // 如果路由合法,就跳转到相应的路由
                if (targetRouterConfig) {
                    const NoComponent = targetRouterConfig.component
                    const RedirectPath = targetRouterConfig.redirect
                    const Children = targetRouterConfig.children
                    if (RedirectPath && !NoComponent) {
                        // console.log('Children====', Children)
                        const ChildComponent = Children.find((v: any) => v.key === RedirectPath) as any
                        return (
                            <Switch>
                                <Redirect from={targetRouterConfig.path} to={RedirectPath} />
                                <Route
                                    path={RedirectPath}
                                    render={(routeProps: any) => <Load {...ChildComponent} routeProps={routeProps} />}
                                />
                            </Switch>
                        )
                    } else {
                        return (
                            <Switch>
                                <Route
                                    path={pathname}
                                    render={(routeProps: any) => (
                                        <Load {...targetRouterConfig} routeProps={routeProps} />
                                    )}
                                />
                            </Switch>
                        )
                    }
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

class ComponentWillLoad extends React.Component {
    render() {
        const getRoutes = this.props
        // console.log('getRoute', getRoutes)
        return (
            <React.Fragment>
                <PermissionAuth {...getRoutes}></PermissionAuth>
            </React.Fragment>
        )
    }
}

export default ComponentWillLoad
