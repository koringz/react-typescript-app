import React, { PureComponent } from 'react'
import { Table, Avatar } from 'antd'
import styles from './List.scss'

class List extends PureComponent {
    render() {
        const { ...tableProps } = this.props
        const columns = [
            {
                title: `Image`,
                dataIndex: 'image',
                render: (text: any) => <Avatar shape="square" src={text} />
            },
            {
                title: `Title`,
                dataIndex: 'title',
                render: (text: any) => ({ text })
            },
            {
                title: `Author`,
                dataIndex: 'author'
            },
            {
                title: `Categories`,
                dataIndex: 'categories'
            },
            {
                title: `Tags`,
                dataIndex: 'tags'
            },
            {
                title: `Visibility`,
                dataIndex: 'visibility'
            },
            {
                title: `Comments`,
                dataIndex: 'comments'
            },
            {
                title: `Views`,
                dataIndex: 'views'
            },
            {
                title: `Publish Date`,
                dataIndex: 'date'
            }
        ]

        return (
            <Table
                {...tableProps}
                pagination={{
                    showTotal: total => `Total ${total} Items`
                }}
                bordered
                scroll={{ x: 1200 }}
                columns={columns}
                rowKey={record => record.id}
            />
        )
    }
}

export default List
