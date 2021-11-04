/*  描述: 面包屑
 *  作者: koringz
 *  日期: 2021-11-04
 */

import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumb, Menu } from 'antd'

import '@/layout/AppBreadcrumb.scss'

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
        <Breadcrumb className="rc-Breadcrumb">
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
