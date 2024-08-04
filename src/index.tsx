import React from 'react'
import { render } from 'react-dom'
// import 'antd/dist/reset.css'
import './assets/iconfont/iconfont.css'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import { xssFilter } from '@/utils/xssFilter'

import './theme/index.scss'
import './styles/index.scss'
import './styles/public.scss'
import './styles/reset.scss'

import api from '@/services/api'
React.$api = api
React.$xss = xssFilter

import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

import App from './App'

const Lapp = () => (
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>
)

render(<Lapp />, document.querySelector('#root'))
