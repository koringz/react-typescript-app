import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.css'
import './theme/index.scss'
import './styles/index.scss'
import './styles/public.scss'
import './styles/reset.scss'

import App from './App'

render(<App />, document.querySelector('#root'))
