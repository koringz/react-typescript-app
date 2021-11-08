/*  描述: 顶部 header 模板
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import { Layout, Menu, Dropdown, Modal, Form, Button, Input, message, Avatar } from 'antd'
import '@/layout/AppHeader.scss'

import avatar from '@/assets/img/20211104153431.jpg'

const { Header } = Layout

const menuSty = {
    display: 'flex',
    flex: 1
}

const curActive = true
class AppHeader extends React.PureComponent {
    // curActive = props
    constructor(props: any) {
        super(props)
        this.state = {
            curActive: false
        }
        this.logup.bind(this)
    }
    logup() {
        sessionStorage.removeItem('token')
        console.log(this)
        history.go('/login')
    }
    render() {
        return (
            <div className="header-container rc-header">
                <Header className="header">
                    <span className="avator-icon">
                        <Avatar src={avatar} alt="" />
                    </span>
                    <div className="header-nav">
                        <ul style={menuSty}>
                            <li>
                                <a href="/" rel="noopener noreferrer">
                                    首页
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer">
                                    大数据可视化平台
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer">
                                    掘金
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer">
                                    CSDN
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-info-center fz14">
                        <span className="user-name">
                            <span>
                                用户名
                            </span>
                            <span className="pl4">
                                 {sessionStorage.token}
                            </span>
                         </span>
                        <Button type="link" className="ml12" onClick={this.logup}>
                            注销
                        </Button>
                    </div>
                </Header>
            </div>
        )
    }
}

export default AppHeader
