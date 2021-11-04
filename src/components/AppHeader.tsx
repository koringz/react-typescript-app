/*  描述: 底部 header 模板
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import { Layout, Menu, Dropdown, Modal, Form, Button, Input, message } from 'antd'
import './../styles/header.scss'
import avatar from "@/assets/img/20211104153431.jpg"


const { Header } = Layout


const menuSty = {
    display: 'flex',
    flex: 1
}


const AppHeader = (props: any) => {
    const { curActive } = props
    // console.log('props===', props)

    return (
        <div className="header-container rc-header">
            <Header className="header">
                <span className="avator-icon">
                    <img src={avatar} alt=""/>
                </span>
                <div className="section">
                    <ul style={menuSty}>
                        <li>
                            <a href="/" rel="noopener noreferrer" className={curActive}>
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
            </Header>
        </div>
    )
}

export default AppHeader
