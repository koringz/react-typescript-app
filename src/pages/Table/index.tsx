/*  描述: 表格
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '_antd@4.16.13@antd'
import './index.scss'
import './index.less'

class Table extends React.Component {
    render() {
        return (
            <div>
                {/* something */}koringz 123123
                <div className="table">table 12312321312</div>
                <div>12313</div>
                <div>
                    <Button type="primary">Antd Button</Button>
                </div>
                <div>
                    <Link to="./home/main">home</Link>
                </div>
            </div>
        )
    }
}

export default Table
