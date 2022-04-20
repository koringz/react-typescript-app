import axios from 'axios'
import { message, notification } from 'antd'
import config from '@/config/app'
import React from 'react'

interface CodeMessage {
    [key: number]: string
}

const codeMessage: CodeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
}

const checkStatus = (response: any) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    }
    const errortext = codeMessage[response.status] || response.statusText
    notification.error({
        message: `请求错误 ${response.status}: ${response.url}`,
        description: errortext
    })
    const error = new Error(errortext) as any
    error.name = response.status
    error.response = response
    throw error
}
/**
 * 初始化
 */
axios.defaults.headers.post['Content-Type'] = 'application/json'
const service = axios.create({
    timeout: 10000,
    withCredentials: true,
    baseURL: config.baseURL
})

// 封装axios
const http = (method: string, url: string, params: any, config = { formData: false }) => {
    return new Promise((resolve, reject) => {
        const token = sessionStorage.token
        // if (!token) return { code: null }

        if (config.formData) {
            var formData = new FormData();
            Object.keys(params).map((item: any) => {
                if(Array.isArray(params[item])) {
                    params[item].map((tiny: any, index: number) => {
                        formData.append(item, tiny)
                    })
                }
                else formData.append(item, params[item])
            })
            params = formData
        }

        let payload = { method, url } as any
        Object.assign(payload, config)

        params && Object.keys(params).map((item:any) => {
            if(typeof params[item] === 'string') {
                if(!params[item].length) delete params[item]
            }
            if(params[item] === null || params[item] === undefined) delete params[item]
        })

        if (['get'].includes(method)) {
            payload.params = params
            if (payload.type) payload.responseType = payload.type == 'blob' ? 'blob' : 'json'
        } else {
            if(params) params = React.$xss(params)
            payload.data = params
            if (payload.type) payload.responseType = payload.type == 'blob' ? 'blob' : 'json'
        }

        if(config.baseURL) {
            service.defaults.headers.baseURL = config.baseURL
        }

        service(payload)
            .then(checkStatus)
            .then((response: any) => resolve(response))
            .catch((error: any) => reject(error))
    })
}

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    (config: any) => {
        config.headers['Content-Type'] = config.formData ? '' : 'application/json'
        config.headers['token'] = sessionStorage.token || ''
        return config
    },
    (error: any) => {
        Promise.reject(error)
    }
)
/**
 * 响应拦截器
 */
service.interceptors.response.use(
    (response: any) => {
        if (response.data.code == 401) {
            if (location.hash.toLowercase().indexOf('login') < 0) {
                window.location.href = location.host + '#/login'
            }
        }
        return Promise.resolve(response)
    },
    (error: any) => {
        return Promise.reject(error)
    }
)
/**
 * 请求API方法
 */
const request = {
    get() {
        return http('get', arguments[0], arguments[1], arguments[2])
    },
    post() {
        return http('post', arguments[0], arguments[1], arguments[2])
    },
    put() {
        return http('put', arguments[0], arguments[1], arguments[2])
    },
    patch() {
        return http('patch', arguments[0], arguments[1], arguments[2])
    },
    delete() {
        return http('delete', arguments[0], arguments[1], arguments[2])
    }
}

export default request
