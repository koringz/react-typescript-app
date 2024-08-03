import React from 'react'
import { Card } from 'antd'

import './ArticleContent.scss'

const ArticleContent = () => {
    return (
        <Card style={{ width: 240 }} className="article-content">
            <div>
                <a href="javascript:void(0);">案件获取</a>
            </div>
            <div>
                <a href="javascript:void(0);">分析数据</a>
            </div>
            <div>
                <a href="javascript:void(0);">办理流程</a>
            </div>
            <div>
                <a href="javascript:void(0);">案件确认</a>
            </div>
        </Card>
    )
}

export default ArticleContent
