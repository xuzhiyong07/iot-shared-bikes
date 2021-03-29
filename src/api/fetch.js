/**
 * 封装请求
 * @author Mars
 */

import { FetchGET } from './request.js'

const BASE_URL = 'http://localhost:1102'

// city
const pathOpenCity = `${BASE_URL}/city/open-city`
const pathGetOrder = `${BASE_URL}/order/order-list`

// fetch methods
export const getOpenCity = params => {
    return FetchGET(
        params,
        pathOpenCity,
        getOpenCity
    )
}

export const getOrder = params => {
    return FetchGET(
        params,
        pathGetOrder,
        getOrder
    )
}
