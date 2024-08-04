import React, { PureComponent } from 'react'
import { Table, Avatar } from 'antd'

class List extends PureComponent {
    render() {
        const { ...tableProps } = this.props
        const columns = [
            {
                title: `图片`,
                dataIndex: 'image',
                render: (text: any) => <Avatar shape="square" src={text} />
            },
            {
                title: `标题`,
                dataIndex: 'title',
                render: (text: any) => ({ text })
            },
            {
                title: `作者`,
                dataIndex: 'author'
            },
            {
                title: `分类`,
                dataIndex: 'categories'
            },
            {
                title: `标签`,
                dataIndex: 'tags'
            },
            {
                title: `显示`,
                dataIndex: 'visibility'
            },
            {
                title: `时间`,
                dataIndex: 'date'
            }
        ]

        return (
            <Table
                bordered
                {...tableProps}
                columns={columns}
                rowKey={record => record.id}
                pagination={{
                    showTotal: total => `Total ${total} Items`
                }}
            />
        )
    }
}

export default List
