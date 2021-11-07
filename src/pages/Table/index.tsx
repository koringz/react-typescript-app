/*  描述: 表格
 *  作者: koringz
 *  日期: 2021-10-30
 */

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
        console.log(this.props)
        const { location, history } = this.props as any
        const { pathname } = location

        history.push({
            pathname,
            search: '?'+stringify({
              status: key,
            }),
        })
    }

    // componentWillMount () {
    //     // console.log('componentWillMount==',this.props)
    // }

    componentDidMount() {
        const { location, history } = this.props as any
        const { pathname } = location
        
        // const status = 1
        // history.push({
        //     pathname,
        //     search: '?'+stringify({
        //       status: status,
        //     }),
        // })
    }

    componentDidUpdate () {
        // console.log(this.props)
    }

    // componentWillReceiveProps() {
    //     // console.log('componentWillReceiveProps==',this.props)
    // }

    componentWillUnmount() {
        // console.log('componentWillUnmount==',this.props)
    }

    get listProps() {
        const { location } = this.props as any
        const { search, pathname } = location
        // console.log('location====',location)

        return {
            onChange(page: any) {
                // history.push({
                //     pathname,
                //     search: '?'+stringify({
                //         ...search,
                //     })
                // })
            }
        }
    }

    public takeUrlParams (name: string) {
        const { location } = this.props as any
        const { search } = location
        const paramsString = search.substring(1)
        const searchParams = new URLSearchParams(paramsString)
        const value = searchParams.get(name)
        return value
    }

    render() {
        return (
            <Layout>
                <Content >
                    <Tabs activeKey={
                        this.takeUrlParams('status') === String(EnumPostStatus.UNPUBLISH)
                        ? String(EnumPostStatus.UNPUBLISH)
                        : String(EnumPostStatus.PUBLISHED)} onChange={this.handleTabClick}>
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
