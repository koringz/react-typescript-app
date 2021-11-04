/*  描述: 底部 footer 模板
 *  作者: koringz
 *  日期: 2021-10-30
 */

import * as React from 'react'

import '@/layout/AppFooter.scss'

export default class AppFooter extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer">
                    <div className="copyright">Copyright@2021-2025 11331144***</div>
                </div>
            </div>
        )
    }
}
