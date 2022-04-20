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

export const SetRoutes = [
    {
        menuid: 1,
        key: '/',
        name: '/',
        needLogin: true,
        title: '表格',
        icon: 'bars',
        component: LoadComponent(() => import('@/layout/DefaultLayout'))
    },
    {
        menuid: 2,
        key: '/home',
        name: 'home',
        needLogin: true,
        title: '首页',
        icon: 'bars',
        // component: LoadComponent(() => import('@/pages/Home/index.tsx')),
        children: [
            {
                menuid: '2-1',
                parentid: 2,
                key: '/home/main',
                name: 'main',
                needLogin: true,
                title: '主页',
                icon: 'bars',
                component: LoadComponent(() => import('@/pages/Home/index.tsx')),
            },
            {
                menuid: '2-2',
                parentid: 2,
                key: '/home/sub',
                name: 'home-sub',
                redirect: '/home/sub/one',
                title: '子菜单',
                icon: 'bars',
                children: [
                    {
                        menuid: '2-2-1',
                        parentid: '2-2',
                        key: '/home/sub/one',
                        name: 'home-sub-one',
                        title: '孙子菜单-one',
                        component: LoadComponent(() => import('@/pages/Dash/index.tsx'))
                    },
                    {
                        menuid: '2-2-2',
                        parentid: '2-2',
                        title: '孙子菜单-two',
                        name: 'home-sub-two',
                        key: '/home/sub/two',
                        component: LoadComponent(() => import('@/pages/Dash/index.tsx'))
                    }
                ]
            }
        ]
    },
    {
        menuid: 3,
        key: '/table',
        name: 'table',
        needLogin: true,
        title: '表格',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Table/index.tsx'))
    },
    {
        menuid: 5,
        key: '/404',
        name: '404',
        needLogin: true,
        title: '404界面',
        icon: 'bars',
        component: LoadComponent(() => import('@/components/404.tsx'))
    },
    {
        menuid: 6,
        key: '/login',
        name: 'Login',
        needLogin: true,
        title: '登陆界面',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Login/index.tsx'))
    },
]

// 根据路由名称获取可访问的路由表
const filterRouteMap = (routeNames: string[], routeMap: any) => {
    const acceptRouteMap: any = []
    routeMap.forEach((route: any) => {
        // 如果一级路由的名称存在路由权限表中，则它之下的所有子路由都可访问
        if (routeNames.includes(route.key)) {
            acceptRouteMap.push(route)
            // 如果一级路由的名称不在路由权限表中，再看它的哪些子路由名称在路由权限表中
            if (route.children) {
                route.children = filterRouteMap(routeNames, route.children)
            }
        }
    })
    return acceptRouteMap
}

// 设置权限访问控制
const permission = ['/table', '/home', '/form', '/home/main', '/home/sub', '/home/sub/one', '/home/sub/two', '/about']
const PermissionRoutes = filterRouteMap(permission, SetRoutes)
// console.log('PermissionRoutes=',PermissionRoutes)

export default PermissionRoutes
