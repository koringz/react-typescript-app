/*  描述: 顶部 header 模板
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import { Layout, Menu, Dropdown, Modal, Form, Button, Input, message, Avatar } from 'antd'
import { DownOutlined, UserOutlined } from "@ant-design/icons"
import avatar from '@/assets/img/20211104153431.jpg'
import '@/layout/AppHeader.scss'

const { Header } = Layout

const menuSty = {
    display: 'flex',
    flex: 1
}

class AppHeader extends React.PureComponent {
    constructor(props: any) {
        super(props)
        this.logup.bind(this)
        this.handleMenuClick.bind(this)
    }
    logup() {
        sessionStorage.removeItem('token')
        history.go('/login')
    }
    handleMenuClick(e: any) {
        message.info('click on menu item')
        console.log(e)
    }
    userinfo() {
        const info = sessionStorage.token ? JSON.parse(sessionStorage.token) : {}
        return info
    }
    menu = () => (
        <Menu onClick={() => this.handleMenuClick()}>
            <Menu.Item key="1">
                个人信息
            </Menu.Item>
            <Menu.Item key="2" onClick={() => this.logup()}>
                退出
            </Menu.Item>
        </Menu >
    )
    render() {
        return (
            <div className="header-container rc-header">
                <Header className="header">
                    <span className="avator-icon white">
                        koringz react demo
                    </span>
                    <div className="header-info-center fz14">
                        <Avatar alt="" icon={<UserOutlined />} className="mr10" />
                        <Dropdown overlay={this.menu}>
                            <a onClick={e => e.preventDefault()} className="white">
                                {this.userinfo()} <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                </Header>
            </div>
        )
    }
}

export default AppHeader
