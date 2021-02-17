/**
 * 封装拦截请求
 * @author xuzhiy
 */
import jsonp from 'jsonp'

export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            jsonp(options.url, { param: 'callback' }, function(err, res) {
                if (res.status === 'success') {
                    resolve(res)
                } else {
                    reject(res.message)
                }
            })
        })
    }
}
