/**
 * 请求
 * @author xuzhiy
 */

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
                    resolve(res)
                }
            } else {
                resolve(res)
            }
        }).catch(error => {
            reject(error)
        })
    })
}

export const FetchPOST = (params, url, callBack) => {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            timeout: timeout,
            body: JSON.stringify(params), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
            },
        }).then(res => res.json()).then(res => {
            if (res) {
                if (res.code === 0) {
                    resolve(res)
                } else {
                    resolve(res)
                }
            } else {
                resolve(res)
            }
        }).catch(error => {
            reject(error)
        })
    })
}
