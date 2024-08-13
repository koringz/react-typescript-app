import React from 'react'
import { Button, Descriptions } from 'antd'

const items = [
    {
        key: '1',
        label: '型号名称',
        children: 'MACBOOK PRO'
    },
    {
        key: '2',
        label: '处理器名称',
        children: 'Intel core i5'
    },
    {
        key: '3',
        label: '处理器数量',
        children: '1'
    },
    {
        key: '4',
        label: '内存',
        children: '4'
    },
    {
        key: '5',
        label: '序列号',
        children: 'C02GWJP6DV13'
    },
    {
        key: '6',
        label: '供应商',
        children: 'Intel'
    },
    {
        key: '7',
        label: '容量',
        children: '512G'
    }
]

interface PropsMacInfo {
    onHancleMacinfo?: Function
}
const MacInfo = ({ onHancleMacinfo }: PropsMacInfo) => {
    return (
        <Descriptions
            title="硬件信息"
            size={'small'}
            items={items}
            extra={
                <Button type="primary" onClick={onHancleMacinfo}>
                    编辑
                </Button>
            }
        />
    )
}

export default MacInfo
