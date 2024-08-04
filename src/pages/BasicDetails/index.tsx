/*  描述: 详情页
 *  作者: koringz
 *  日期: 2024/8/4
 */
import React, { PureComponent } from 'react'

import { Layout, Divider } from 'antd'

const { Content } = Layout

import UserDescri from './UserDescri'
import StoreDescri from './StoreDescri'

class BasicDetails extends PureComponent {
    render() {
        return (
            <>
                <Content>
                    <StoreDescri />
                    <Divider />
                    <UserDescri />
                </Content>
            </>
        )
    }
}

export default BasicDetails
