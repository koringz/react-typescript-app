import React from 'react'
import { Card, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'

const items: DescriptionsProps['items'] = [
    {
        key: '1',
        label: '货物单',
        children: '2000423423'
    },
    {
        key: '2',
        label: '状态',
        children: '已取货'
    },
    {
        key: '3',
        label: '销售单号',
        children: '1234123421'
    },
    {
        key: '4',
        label: '订单',
        children: '3214321432'
    }
]

const StoreDescri: React.FC = () => {
    return <Descriptions title="货物信息" size={'small'} items={items} />
}

export default StoreDescri
