/*  描述: 工作台
 *  作者: koringz
 *  日期: 2024/8/2
 */
import React, { Component, PureComponent } from 'react'

import { Layout, Tree } from 'antd'

const { Content } = Layout

import ArticleContent from './ArticleContent'

type MyFlexContainer = {
    flex: number
    flexDirection: 'row' | 'column'
    justifyContent: string
}
const headSty: MyFlexContainer = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
}
class Platform extends PureComponent {
    render() {
        return (
            // 长方形块 标题 连接
            <Layout style={headSty}>
                <ArticleContent></ArticleContent>
                <ArticleContent></ArticleContent>
                <ArticleContent></ArticleContent>
                <ArticleContent></ArticleContent>
            </Layout>

            // 卡片

            // 切换 审核 卡页面
        )
    }
}

export default Platform
