import * as table from './action-type'

// 将会通过 dispatch 传递数据进来，然后在 redux 内部分发返回数据到 reducer 容器， 再进行 store 储存回调函数(state, action) =>{}

// 保存表单数据
export const saveData = (payload: any) => {
    return {
        type: table.SAVEFORMDATA,
        payload
    }
}

// 保存图片地址
export const clearData = () => {
    return {
        type: table.CLEARDATA
    }
}
