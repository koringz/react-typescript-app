/*  描述: 侧边栏 模板
 *  作者: koringz
 *  日期: 2021-10-30
 */

import * as React from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'
import { Layout, Menu, Dropdown, Modal, Form, Button, Input, message } from 'antd'
import { LinkOutlined } from '@ant-design/icons'

const styles = {
    logo: {
        height: '32px',
        background: 'rgba(255, 255, 255, .2)',
        margin: '16px'
    }
}

export default class AppSidebar extends React.Component {
    //此组件的意义就是将数据抽离出来，通过传递数据去渲染
    state = {
        openKeys: [],
        selectedKeys: []
    }

    componentDidMount() {
        // console.log(this.props as any)
        // 防止页面刷新侧边栏又初始化了
        const pathname = (this.props as any).location.pathname
        //获取当前所在的目录层级
        const rank = pathname.split('/')
        switch (rank.length) {
            case 2: //一级目录
                this.setState({
                    selectedKeys: [pathname]
                })
                break
            case 5: //三级目录，要展开两个subMenu
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
                })
                break
            default:
                this.setState({
                    selectedKeys: [pathname],
                    openKeys: [pathname.substr(0, pathname.lastIndexOf('/'))]
                })
        }
    }

    componentWillUpdate(nextProps: any) {
        // console.log(nextProps)
        //当点击面包屑导航时，侧边栏要同步响应
        const pathname = nextProps.location.pathname
        if ((this.props as any).location.pathname !== pathname) {
            this.setState({
                selectedKeys: [pathname]
            })
        }
    }

    onOpenChange = (openKeys: any) => {
        //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
                openKeys
            })
            return
        }

        //最新展开的菜单
        const latestOpenKey = openKeys[openKeys.length - 1]
        //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
        //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
        //只适用于3级菜单
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
                openKeys
            })
        } else {
            this.setState({
                openKeys: [latestOpenKey]
            })
        }
    }

    renderMenuItem = ({ key, icon, title, hidden } = this.props as any) => {
        return !hidden ? (
            <Menu.Item key={key} style={{ display: hidden ? 'none' : 'block' }}>
                <Link to={key}>
                    {icon && <LinkOutlined type={icon} />}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        ) : (
            false
        )
    }
    renderSubMenu = ({ key, icon, title, children, hidden } = this.props as any) => {
        return (
            <Menu.SubMenu
                style={{ display: hidden ? 'none' : 'block' }}
                key={key}
                title={
                    <span>
                        {icon && <LinkOutlined type={icon} />}
                        <span>{title}</span>
                    </span>
                }
            >
                {children &&
                    children.map((item: any) => {
                        return item.children && item.children.length > 0 && !hidden
                            ? this.renderSubMenu(item)
                            : this.renderMenuItem(item)
                    })}
            </Menu.SubMenu>
        )
    }

    render() {
        const { menus } = this.props as any
        const { openKeys, selectedKeys } = this.state
        return (
            <Menu
                mode="inline"
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                onOpenChange={this.onOpenChange}
                onClick={({ key }) => this.setState({ selectedKeys: [key] })}
                theme={(this.props as any).theme ? (this.props as any).theme : 'light'}
            >
                {(this.props as any).menus &&
                    (this.props as any).menus.map((item: any) => {
                        return item.children && item.children.length > 0
                            ? this.renderSubMenu(item)
                            : this.renderMenuItem(item)
                    })}
            </Menu>
        )
    }
}
