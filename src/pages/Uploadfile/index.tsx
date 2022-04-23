import React, { PureComponent } from 'react'
import { Upload } from 'antd'

import '@/pages/Login/index.scss'
import { Button } from 'antd'


class Uploadfile extends PureComponent {
    render() {
        return (
            <div>
                <Upload accept="image/*,.zip,.doc,.rar" classname="">
                    <Button>
                        <span>浏览</span>
                    </Button>
                </Upload>
            </div>
        )
    }
}

export default Uploadfile
