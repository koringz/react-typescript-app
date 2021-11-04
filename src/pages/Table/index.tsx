import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import History from 'umi'
import { stringify } from 'qs'
import { Page } from 'components'
import List from './components/List'

console.log(History)

const { TabPane } = Tabs

const EnumPostStatus = {
  UNPUBLISH: 1,
  PUBLISHED: 2,
}

class Table extends PureComponent {
  handleTabClick = (key: any) => {
    const { pathname } = (this.props as any).location

    History.push({
      pathname,
      search: stringify({
        status: key,
      }),
    })
  }

  componentDidMount() {
      debugger
    const { post, loading, location } = this.props as any
    const { list, pagination } = post
    const { query, pathname } = location
    const status = 1
    History.push({
        pathname,
        search: stringify({
          ...query,
          status
        }),
      })
  }

  get listProps() {
    debugger
    const { post, loading, location } = this.props as any
    const { list, pagination } = post
    const { query, pathname } = location

    return {
      pagination,
      dataSource: list,
      loading: loading.effects['post/query'],
      onChange(page: any) {
        History.push({
          pathname,
          search: stringify({
            ...query,
            page: page.current,
            pageSize: page.pageSize,
          }),
        })
      },
    }
  }

  render() {
    debugger
    const { location } = this.props as any
    const { query } = location

    return (
      <Page inner>
        <Tabs
          activeKey={
             String(EnumPostStatus.UNPUBLISH)
          }
          onTabClick={this.handleTabClick}
        >
          <TabPane
            tab={`Publised`}
            key={String(EnumPostStatus.PUBLISHED)}
          >
            <List {...this.listProps} />
          </TabPane>
          <TabPane
            tab={`Unpublished`}
            key={String(EnumPostStatus.UNPUBLISH)}
          >
            <List {...this.listProps} />
          </TabPane>
        </Tabs>
      </Page>
    )
  }
}

interface Table {
    post: any
    loading: any
    location: any
    dispatch: any
}

Table.propTypes  = {
  post: PropTypes.object,
  loading: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
}

export default Table
