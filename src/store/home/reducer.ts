import * as homeActionTypes from './action-type'

// 提供数据、修改数据给组件使用
let initialState = {
    orderSum: '', //金额
    name: '', //姓名
    phoneNo: '', //手机号
    imgpath: '' //图片地址
}

// 首页表单数据
export const formData = (
    state = initialState,
    action: { type: string; datatype: string; value: object; path: string }
) => {
    // action 是外部通过 dispatch 分发对象属性进来， 根据属性参数执行相应条件 case 语句行为
    // handleClick : dispatch( addParamters )
    switch (action.type) {
        // // 匹配触发行为类型和对象是否已经存在的 action types，如果 dispatch 触发行为正确，就改变 initialState 初始数据和返回新数据
        case homeActionTypes.SAVEFORMDATA:
            return {
                ...state,
                ...{
                    [action.datatype]: action.value
                }
            }

        case homeActionTypes.SAVEIMG:
            return {
                ...state,
                ...{ imgpath: action.path }
            }

        case homeActionTypes.CLEARDATA:
            return {
                ...state,
                ...initialState
            }

        default:
            return state
    }
}
