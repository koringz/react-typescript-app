/*  描述: 工作台
 *  作者: koringz
 *  日期: 2024/8/2
 */
import React, { PureComponent } from 'react'

import { Layout, Divider } from 'antd'

import ArticleContent from './ArticleContent'
import CollapseContent from './CollapseContent'
import DefaultTable from './DefaultTable'

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
            <>
                {/* 长方形块 标题 连接 */}
                <Layout style={headSty}>
                    <ArticleContent></ArticleContent>
                    <ArticleContent></ArticleContent>
                    <ArticleContent></ArticleContent>
                    <ArticleContent></ArticleContent>
                </Layout>

                {/* 卡片 */}
                <CollapseContent></CollapseContent>

                {/* 切换 审核 卡页面 */}
                <Divider orientation="left">列表</Divider>
                <DefaultTable />
                <Divider></Divider>
                <DefaultTable />
            </>
        )
    }
}

export default Platform
