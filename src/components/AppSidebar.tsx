/*  描述: 侧边栏 模板
 *  作者: koringz
 *  日期: 2021-10-30
 */

import * as React from 'react'

class AppSidebar extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    侧边栏
                </div>
            </div>
        )
    }
}
export default React.memo(AppSidebar)