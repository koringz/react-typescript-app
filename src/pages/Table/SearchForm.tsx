import { Card, Form, Row, Space, Input, Button } from 'antd'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import * as action from '@/store/table/action'
import { connect } from 'react-redux'

const SearchForm = (props: any) => {
    const [state, setState] = useState({
        formConditions: {}
    })
    const [form] = Form.useForm()
    // 监听 - 接收参数
    const params = useMemo(() => {
        return {
            ...state.formConditions
        }
    }, [state.formConditions])
    // 回调 - 接收参数
    const refresh = useCallback(() => {
        setState({ formConditions: form.getFieldsValue() })
    }, [form])

    // 初始化
    useEffect(() => {
        if (Object.keys(params).length) {
            props.storeSearchParams({ tableFormList: params ? params.name : [] })
        }
    }, [params])

    // 操作
    const onSearch = (value: any) => {
        refresh()
    }
    const onReset = (value: any) => {
        form.resetFields()
        props.storeSearchParams({ tableFormList: [] })
    }
    return (
        <Form
            className="mt10 mb20 rc-antd-layout-search-form"
            layout="inline"
            form={form}
            onFinish={(value: EventTarget) => onSearch(value)}
        >
            <Card bordered={true} className="f1">
                <Row gutter={24}>
                    <Space>
                        <Form.Item name="name" label="用户名1">
                            <Input placeholder="请输入" onPressEnter={onSearch}></Input>
                        </Form.Item>
                        <Form.Item>
                            <Button size="middle" type="primary" htmlType="submit">
                                查询
                            </Button>
                            <Button size="middle" onClick={onReset}>
                                重置
                            </Button>
                        </Form.Item>
                    </Space>
                </Row>
            </Card>
        </Form>
    )
}

function mapDispathToProps(dispatch: any) {
    return {
        storeSearchParams: function (formData: any) {
            return dispatch(action.saveData(formData))
        },
        clearFormParams: function () {
            return dispatch(action.clearData())
        }
    }
}

export default connect(null, mapDispathToProps)(SearchForm)
