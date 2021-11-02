/**
 * name 路由名称
 * needLogin 路由是否需要权限验证
 * title 访问路由设置 meta 标题
 * icon 访问路由设置 menu 菜单icon
 */
import React from 'react'

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

const setRoutes = [
    {
        path: '/table',
        name: 'table',
        needLogin: true,
        title: '表格',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Table/index.tsx'))
    },
    {
        path: '/',
        name: '/',
        needLogin: true,
        title: '表格',
        icon: 'bars',
        component: LoadComponent(() => import('@/layout/DefaultLayout'))
    },
    {
        path: '/home',
        name: 'home',
        needLogin: true,
        title: '主页',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Home/index.tsx')),
        children: [
            {
                path: '/home/sub',
                name: 'home-sub',
                redirect: '/home/sub/one',
                title: '子菜单',
                icon: 'bars',
                children: [
                    {
                        title: '孙子菜单-one',
                        name: 'home-sub-one',
                        path: '/home/sub/one',
                        component: LoadComponent(() => import('@/pages/Dash/index.tsx'))
                    },
                    {
                        title: '孙子菜单-two',
                        name: 'home-sub-two',
                        path: '/home/sub/two',
                        component: LoadComponent(() => import('@/pages/Dash/index.tsx'))
                    }
                ]
            }
        ]
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

// 根据路由名称获取可访问的路由表
const acceptedRouteMap: any = []
const filterRouteMap = (routeNames: string[], routeMap: any) => {
    routeMap.forEach((route: any) => {
        // 如果一级路由的名称存在路由权限表中，则它之下的所有子路由都可访问
        if (routeNames.includes(route.path)) {
            // 如果一级路由的名称不在路由权限表中，再看它的哪些子路由名称在路由权限表中
            if (route.children) {
                filterRouteMap(routeNames, route.children)
                // 如果有子路由可访问，再添加。
                if (route.children.length > 0) {
                    acceptedRouteMap.push(route)
                }
            }
            acceptedRouteMap.push(route)
        }
    })
    // console.log(acceptedRouteMap)
    return acceptedRouteMap
}

// 获取可访问的路由表
const initRoutes = (permission: any[]) => {
    // const routeNames = permission.map(item => item.name)
    return filterRouteMap(permission, setRoutes)
}

const permission = ['/table', '/home', '/home/sub', '/home/sub/one', '/home/sub/two', '/404', '/login', '/about']
const Routes = initRoutes(permission)

export default setRoutes
