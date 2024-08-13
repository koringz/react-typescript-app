/// <reference types="react-scripts" />
/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'classnames' {
    import classNames from 'classnames'
    export default classNames
}

interface ReduxProps {
    storeData?: Record<string, any>
    setStoreData?: (type: string, payload: any) => object
}

type RefType = MutableRefObject<unknown> | ((instance: unknown) => void)

type CommonObjectType<T = any> = Record<string, T>

interface FormItem {
    name: string | (number | string)[]
    label?: string | ReactNode
    placeholder?: string
    initialValue?: unknown
    rule?: any
    hide?: boolean
    disable?: boolean
    extra?: string | ReactNode
    type:
        | 'input'
        | 'numberInput'
        | 'select'
        | 'datePick'
        | 'rangePick'
        | 'radio'
        | 'checkbox'
        | 'textArea'
        | 'switch'
        | 'blockNode'
        | 'node'
    // 特有属性
    rightNode?: ReactNode
    mode?: 'multiple'
    optionType?: 'default' | 'button'
    maxLength?: number
    showTime?: boolean
    options?: { label: string; value: any }[]
    otherOptions?: Record<string, any> // 组件额外属性
}
