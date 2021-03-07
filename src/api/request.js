/**
 * 请求
 * @author xuzhiy
 */

import { message } from 'antd'
const timeout = 10 * 1000

export const FetchGET = (params, url, callBack) => {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'GET',
            timeout: timeout,
        }).then(res => res.json()).then(res => {
            if (res) {
                if (res.code === 0) {
                    resolve(res)
                } else {
                    message.error({
                        content: res.message
                    })
                    resolve(res)
                }
            } else {
                //处理特殊的情况就是response返回什么也没有
                message.error({
                    content: res.message
                })
                resolve(res)
            }
        }).catch(error => {
            message.error({
                content: error
            })
            reject(error)
        })
    })
}
