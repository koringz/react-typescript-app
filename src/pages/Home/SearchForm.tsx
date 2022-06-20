import { Card, Form, Row, Space, Input, Button } from 'antd'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import useTilg from 'tilg'

const SearchForm = (props: any) => {
    const [val, setVal] = useState(1)
    const [state, setState] = useState({
        formConditions: {},
        val: 1
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
            props.changeSearchForm(params)
        }
    }, [params])

    // 操作
    const onSearch = (value: any) => {
        refresh()
    }
    const onReset = (value: any) => {
        setVal(3)
        form.resetFields()
    }
    // 追踪日志信息
    useTilg(val, state)
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
                        <Form.Item name="name" label="用户名">
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

export default SearchForm
