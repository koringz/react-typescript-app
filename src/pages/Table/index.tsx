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
        // console.log(this.props)
        const { location, history } = this.props as any
        const { pathname } = location

        history.push({
            pathname,
            search: '?'+stringify({
              status: key,
            }),
        })
    }

    componentWillMount () {
        debugger
        console.log(this.props)
    }

    componentDidMount() {
        debugger
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
        debugger
        console.log(this.props)
    }
    
    componentWillReceiveProps() {
        debugger
        console.log(this.props)
    }

    componentWillUnmount() {
        debugger
        console.log(this.props)
    }

    

    get listProps() {
        debugger
        const { location } = this.props as any
        const { search, pathname } = location
        console.log('location====',location)

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
                <Content ref="table">
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
