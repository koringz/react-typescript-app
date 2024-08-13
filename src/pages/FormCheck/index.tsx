import React, { useState } from 'react'

import MacInfo from './MacInfo'
import FormModal from './FormModal'

const editInfo: FormItem[] = [
    {
        name: 'category',
        label: '类型',
        type: 'radio',
        rule: { required: true, message: '请选择厂商类型！' },
        options: [
            { label: '研发', value: 1 },
            { label: '发行', value: 2 },
            { label: '研发一体', value: 3 }
        ]
    },
    {
        label: '厂商名称',
        name: 'name',
        type: 'input',
        rule: { required: true, message: '请输入厂商名称！' }
    },
    {
        label: '联系人',
        name: 'contact',
        type: 'input',
        rule: {
            required: true,
            message: '请输入厂商类型联系人！'
        }
    },
    {
        label: '联系电话',
        name: 'mobile',
        type: 'input',
        rule: {
            required: true,
            message: '请输入正确的厂商联系电话！',
            pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
        }
    }
]

const FormCheck = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const hancleMacinfo = () => {
        setModalOpen(true)
    }
    const onOk = () => {
        onCancel()
    }
    const onCancel = () => {
        setModalOpen(false)
    }
    return (
        <>
            <MacInfo onHancleMacinfo={hancleMacinfo} />
            <FormModal open={modalOpen} onCancel={onCancel} onOk={onOk} title="编辑mac信息" editInfo={editInfo} />
        </>
    )
}

export default FormCheck
