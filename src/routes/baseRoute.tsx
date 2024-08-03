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
        hidden: true,
        title: '表格',
        icon: 'bars',
        component: LoadComponent(() => import('@/layout/DefaultLayout'))
    },
    {
        menuid: 2,
        key: '/home',
        name: 'home',
        needLogin: true,
        hidden: true,
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
                hidden: true,
                title: '主页',
                icon: 'bars',
                component: LoadComponent(() => import('@/pages/Home/index.tsx'))
            },
            {
                menuid: '2-2',
                parentid: 2,
                key: '/home/sub',
                name: 'homeSub',
                redirect: '/home/sub/one',
                needLogin: true,
                hidden: true,
                title: '子菜单',
                icon: 'bars',
                children: [
                    {
                        menuid: '2-2-1',
                        parentid: '2-2',
                        key: '/home/sub/one',
                        name: 'homeSubOne',
                        needLogin: true,
                        hidden: true,
                        title: '孙子菜单-one',
                        component: LoadComponent(() => import('@/pages/Home/index.tsx'))
                    },
                    {
                        menuid: '2-2-2',
                        parentid: '2-2',
                        title: '孙子菜单-two',
                        name: 'homeSubTwo',
                        needLogin: true,
                        hidden: true,
                        key: '/home/sub/two',
                        component: LoadComponent(() => import('@/pages/Home/index.tsx'))
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
        hidden: true,
        title: '表格',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Table/index.tsx'))
    },
    {
        menuid: 3,
        key: '/platform',
        name: 'platform',
        needLogin: true,
        hidden: true,
        title: '工作台',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Platform/index.tsx'))
    },
    {
        menuid: 7,
        key: '/uploadfile',
        name: 'uploadfile',
        needLogin: true,
        hidden: true,
        title: '上传文件',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Uploadfile/index.tsx'))
    },
    {
        menuid: 7,
        key: '/permission',
        name: 'permission',
        needLogin: true,
        hidden: true,
        title: '权限菜单',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Permission/index.tsx'))
    },
    {
        menuid: 5,
        key: '/404',
        name: '404',
        needLogin: true,
        hidden: false,
        title: '404界面',
        icon: 'bars',
        component: LoadComponent(() => import('@/components/404.tsx'))
    },
    {
        menuid: 6,
        key: '/login',
        name: 'Login',
        needLogin: true,
        hidden: false,
        title: '登陆界面',
        icon: 'bars',
        component: LoadComponent(() => import('@/pages/Login/index.tsx'))
    }
]

// 根据路由名称获取可访问的路由表
const filterRouteMap = (routeNames: string[], routeMap: any) => {
    const acceptRouteMap: any = []
    routeMap.forEach((route: any) => {
        // 如果一级路由的名称存在路由权限表中，则它之下的所有子路由都可访问
        if (permission.includes(route.name.toLowerCase())) {
            if (!routeNames.includes(route.name.toLowerCase())) {
                route.hidden = true
            } else {
                route.hidden = false
            }

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
const permission = [
    'table', 'home', 'form', 'main',
    'platform',
    'homesub', 'homesubone', 'uploadfile', 'homesubtwo', 'permission'
]

// 注意必须要小写检索
sessionStorage.menu = JSON.stringify([
    { route: "table" }, { route: "homesubtwo" },
    { route: "homesub" }, { route: "home" }, { route: "platform" },
    { route: "permission" }, { route: "main" }, { route: "uploadfile" }
])

/**
 * 获取权限路径-过滤数据
 * @enum localMenu = [{ route: 'table' }, { route: 'home' }, ]
 */
const PermissionRoutes = () => {
    const getLocalMenu = () => {
        let results = []
        const localMenu = sessionStorage.getItem('menu')
        if (localMenu && localMenu.length) {
            const originMenuData = JSON.parse(localMenu)
            results = originMenuData
                .map((item: any) => {
                    return item.route ? item.route : ''
                })
                .filter((item: never) => item)
        }
        return results
    }
    console.log(getLocalMenu())
    return filterRouteMap(getLocalMenu(), SetRoutes)
}

export default PermissionRoutes
