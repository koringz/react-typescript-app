import React, { memo, useRef } from 'react'
import { Modal } from 'antd'

import FormList from './../FormList/'
import { FormInstance } from 'antd/es/form'

interface FormPorps {
    open?: boolean
    title?: string
    noFooter?: boolean
    maskClosable?: boolean
    onCancel?: () => void

    editInfo: FormItem[]
    labelCol?: number
    wrapperCol?: number
    initialValues?: Record<string, any>
    onOk?: (value: Record<string, any>) => void
    onForm?: (form: FormInstance) => void
    onValuesChange?: (value: Record<string, any>) => void
}

const FormModal = (FormPorps: FormPorps) => {
    const formInstance = useRef<FormInstance<any> | null>(null)
    const {
        open,
        title,
        noFooter,
        maskClosable,
        onCancel,
        editInfo,
        labelCol,
        wrapperCol,
        initialValues,
        onOk,
        onForm,
        onValuesChange
    } = FormPorps

    const getForm = (form: FormInstance<any>) => {
        formInstance.current = form
        onForm && onForm(form)
    }
    return (
        <Modal
            title={title}
            centered
            okText="确定"
            cancelText="取消"
            open={open}
            destroyOnClose
            closable={noFooter ? true : false}
            onOk={() => onOk(false)}
            onCancel={() => onCancel(false)}
            width={1000}
            noFooter={noFooter ? null : undefined}
        >
            <FormList
                submitBtn={false}
                itemInfo={editInfo}
                labelCol={labelCol}
                wrapperCol={wrapperCol}
                initialValues={initialValues}
                onOk={onOk}
                onForm={getForm}
                onValuesChange={onValuesChange}
            />
        </Modal>
    )
}

export default memo(FormModal)
