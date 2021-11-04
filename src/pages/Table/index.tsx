import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Tabs, Layout } from 'antd'
import { stringify } from 'qs'
import List from './components/List'

const { Content } = Layout

const { TabPane } = Tabs

const EnumPostStatus = {
    UNPUBLISH: 1,
    PUBLISHED: 2
}

class Table extends PureComponent {
    handleTabClick = (key: any) => {
        const { pathname } = (this.props as any).location

        // History.push({
        //     pathname,
        //     search: stringify({
        //         status: key
        //     })
        // })
    }

    componentDidMount() {
        // debugger
        const { post, loading, location } = this.props as any
        // const { list, pagination } = post
        const { query, pathname } = location
        const status = 1
        // History.push({
        //     pathname,
        //     search: stringify({
        //         ...query,
        //         status
        //     })
        // })
    }

    get listProps() {
        // debugger
        const { post, loading, location } = this.props as any
        // const { list, pagination } = post
        const { query, pathname } = location

        return {
            onChange(page: any) {
                // History.push({
                //     pathname,
                //     search: stringify({
                //         ...query,
                //         page: page.current,
                //         pageSize: page.pageSize
                //     })
                // })
            }
        }
    }

    render() {
        // debugger
        const { location } = this.props as any
        const { query } = location

        return (
            <Layout>
                <Content>
                    <Tabs activeKey={String(EnumPostStatus.UNPUBLISH)} onTabClick={this.handleTabClick}>
                        <TabPane tab={`公用`} key={String(EnumPostStatus.PUBLISHED)}>
                            <List {...this.listProps} />
                        </TabPane>
                        <TabPane tab={`非公用`} key={String(EnumPostStatus.UNPUBLISH)}>
                            <List {...this.listProps} />
                        </TabPane>
                    </Tabs>
                </Content>
            </Layout>
        )
    }
}

interface Table {
    post: any
    loading: any
    location: any
    dispatch: any
}

Table.propTypes = {
    post: PropTypes.object,
    loading: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func
}

export default Table
