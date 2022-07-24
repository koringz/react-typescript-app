/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React, { Component, PureComponent } from 'react'
import { Layout, Tree } from 'antd'

const { Content } = Layout

class Permission extends PureComponent {
    constructor(props: any) {
        super(props)
        this.state = {
            treeData: [
                {
                    title: '123',
                    key: '1',
                    children: [
                        {
                            title: 'leaf',
                            key: '1-a'
                        }
                    ]
                },
                {
                    title: '4546',
                    key: '2',
                    children: [
                        {
                            title: 'react',
                            key: '2-a'
                        },
                        {
                            title: 'react',
                            key: '3-a'
                        }
                    ]
                }
            ],
            checkedKeys: [],
            expandedKeys: [],
            autoExpandParent: true
        }
    }
    /**
     * 监听事件
     * @returns
     */

    onSelect(expandedKeys: React.Key[]) {
        this.setState({
            expandedKeys: expandedKeys,
            autoExpandParent: false
        })
    }
    onCheck(checkedKeys: React.Key[]) {
        this.setState({
            checkedKeys: checkedKeys,
            autoExpandParent: false
        })
    }
    onExpand(checkedKeys: React.Key[]) {
        this.setState(() => ({
            checkedKeys: [...checkedKeys],
            autoExpandParent: !this.state.autoExpandParent
        }))
    }
    render() {
        const { checkedKeys, expandedKeys, autoExpandParent, treeData } = this.state as any
        return (
            <Layout className="Permission">
                <Content>
                    <Tree
                        checkable
                        treeData={treeData}
                        checkedKeys={checkedKeys}
                        expandedKeys={expandedKeys}
                        onCheck={this.onCheck.bind(this)}
                        onSelect={this.onSelect.bind(this)}
                        onExpand={this.onExpand.bind(this)}
                        autoExpandParent={autoExpandParent}
                    ></Tree>
                </Content>
            </Layout>
        )
    }
}

export default Permission
