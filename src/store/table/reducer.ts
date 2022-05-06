import * as tableActionTypes from './action-type'

// 提供数据、修改数据给组件使用
let initialState = {
    tableFormList: {} //
}

// 首页表单数据
export const tableData = (
    state = initialState,
    action: { type: string; datatype: string; payload: object }
) => {
    // action 是外部通过 dispatch 分发对象属性进来， 根据属性参数执行相应条件 case 语句行为
    switch (action.type) {
        case tableActionTypes.SAVEFORMDATA:
            const getData = Object.assign({}, state, action.payload)
            state.tableFormList = getData.tableFormList
            return state
        case tableActionTypes.CLEARDATA:
            state.tableFormList =[]
            return state
        default:
            return state
    }
}
