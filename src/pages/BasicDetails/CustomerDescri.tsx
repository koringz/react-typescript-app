import React from 'react'
import { Card, Avatar } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import './CustomerDescri.scss'

const CustomerDescri: React.FC = () => {
    return (
        <>
            <div className="customer-descri">
                <div className="descri-icon">
                    <CheckOutlined />
                </div>
                <div className="operation-action">提交成功</div>
                <div className="tips">
                    提交结果页用于反馈一系列操作任务的处理结果， 本文字区域可以展示简单的补充说明，如果有类似展示
                    “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
                </div>
            </div>
        </>
    )
}

export default CustomerDescri
