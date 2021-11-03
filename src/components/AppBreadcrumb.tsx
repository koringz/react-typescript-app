import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import { Breadcrumb, Menu } from 'antd'
// import { SetRoutes } from '@/routes/baseRoute'
// import { flattenRoutes } from '@/utils/flatten'

// const allRoutes = flattenRoutes(SetRoutes)
// console.log(allRoutes)

interface Props {
    breadcrumbs: any[]
}

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                General
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Layout
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Navigation
            </a>
        </Menu.Item>
    </Menu>
)

// 通用面包屑
const AppBreadcrumb = () => {
    const history = useHistory()
    console.log(history)
    return (
        <Breadcrumb>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Component</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>
                <a href="">General</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default AppBreadcrumb
