/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Redirect,
    Switch,
    Route,
    Link,
    RouteComponentProps,
    withRouter
} from 'react-router-dom'
import { Table, Typography } from 'antd'
import ComponentWillLoad, { Load } from '@/routes/index'

import { Layout } from 'antd'
const { Header, Footer, Sider, Content } = Layout
const { Text } = Typography

const columns = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Borrow',
        dataIndex: 'borrow'
    },
    {
        title: 'Repayment',
        dataIndex: 'repayment'
    }
]

const data = [
    {
        key: '1',
        name: 'John Brown',
        borrow: 10,
        repayment: 33
    },
    {
        key: '2',
        name: 'Jim Green',
        borrow: 100,
        repayment: 0
    },
    {
        key: '3',
        name: 'Joe Black',
        borrow: 10,
        repayment: 10
    },
    {
        key: '4',
        name: 'Jim Red',
        borrow: 75,
        repayment: 45
    }
]

const fixedColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        fixed: true,
        width: 100
    },
    {
        title: 'Description',
        dataIndex: 'description'
    }
]

const fixedData = []
for (let i = 0; i < 20; i += 1) {
    fixedData.push({
        key: i,
        name: ['Light', 'Bamboo', 'Little'][i % 3],
        description: 'Everything that has a beginning, has an end.'
    })
}

const Home: React.FC = (props): React.ReactElement => {
    const { location, history } = props as any
    // const { children } = routes
    console.log('home============', props)
    return (
        <Layout>
            <Content>
                <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered
                    summary={pageData => {
                        let totalBorrow = 0
                        let totalRepayment = 0

                        pageData.forEach(({ borrow, repayment }) => {
                            totalBorrow += borrow
                            totalRepayment += repayment
                        })

                        return (
                            <>
                                <Table.Summary.Row>
                                    <Table.Summary.Cell>Total</Table.Summary.Cell>
                                    <Table.Summary.Cell>
                                        <Text type="danger">{totalBorrow}</Text>
                                    </Table.Summary.Cell>
                                    <Table.Summary.Cell>
                                        <Text>{totalRepayment}</Text>
                                    </Table.Summary.Cell>
                                </Table.Summary.Row>
                                <Table.Summary.Row>
                                    <Table.Summary.Cell>Balance</Table.Summary.Cell>
                                    <Table.Summary.Cell colSpan={2}>
                                        <Text type="danger">{totalBorrow - totalRepayment}</Text>
                                    </Table.Summary.Cell>
                                </Table.Summary.Row>
                            </>
                        )
                    }}
                />
            </Content>
        </Layout>
    )
}

export default withRouter(Home)
