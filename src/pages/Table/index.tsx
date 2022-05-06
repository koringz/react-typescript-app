/*  描述: 表格
 *  作者: koringz
 *  日期: 2022-5-5
 */

import React, { Component, PureComponent } from 'react'
import { Tabs, Layout } from 'antd'
import SearchForm from './SearchForm'

import FirstList from './components/FirstList'
import SecondList from './components/SecondList'

const { Content } = Layout
const { TabPane } = Tabs

const EnumPostStatus = {
    First: 1,
    Second: 2
}

class MultTable extends PureComponent {
    render() {
        return (
            <Layout className='rc-antd-layout-pagination rc-antd-layout-table'>
                <SearchForm />
                <TableList {...this.props} />
            </Layout>
        )
    }
}

class TableList extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            tab: String(EnumPostStatus.First)
        }
    }
    onHandleTabChange(val: any) {
        this.setState({
            tab: val
        })
    }
    render() {
        const { tab } = this.state as any
        return (
            <Content >
                <Tabs activeKey={tab} onChange={this.onHandleTabChange.bind(this)}>
                    <TabPane tab={`公用`} key={String(EnumPostStatus.First)}>
                        {tab === String(EnumPostStatus.First) && <FirstList {...this.props} />}
                    </TabPane>
                    <TabPane tab={`非公用`} key={String(EnumPostStatus.Second)}>
                        {tab === String(EnumPostStatus.Second) && <SecondList {...this.props} />}
                    </TabPane>
                </Tabs>
            </Content>
        )
    }
}

export default MultTable
