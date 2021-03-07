/**
 * 封装请求
 * @author xuzhiy
 */

import { FetchGET } from './request.js'

const BASE_URL = 'http://localhost:1102'

// city
const openCity = `${BASE_URL}/city/open-city`

// fetch methods
export const getOpenCity = params => {
    return FetchGET(
        params,
        openCity,
        getOpenCity
    )
}
