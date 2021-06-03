import {request,requestGoods} from "./request";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type,page) {
    return requestGoods({
        url: '/home/data',
        params: {
            type,page
        }
    })
}