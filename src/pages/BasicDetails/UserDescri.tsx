import React from 'react'
import { Card, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'

const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: '用户姓名',
        children: '小小'
    },
    {
        key: '2',
        label: '联系电话',
        children: '18100000000'
    },
    {
        key: '3',
        label: '常用快递',
        children: '菜鸟仓储'
    },
    {
        key: '4',
        label: '取货地址',
        children: '浙江省杭州市西湖区万塘路18号'
    },
    {
        key: '5',
        label: '备注',
        children: '无'
    }
]

const UserDescri: React.FC = () => {
    return <Descriptions title="用户信息" size={'small'} items={items} />
}

export default UserDescri
