import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 5000
    })
    //拦截器 ps:拦截后需要返回config
    instance.interceptors.request.use(config =>{
        return config
    }, error => {
    })
    instance.interceptors.response.use(config =>{
        return config.data
    }, error => {
    })
    return  instance(config)
}

export function requestGoods(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 5000
    })
    //拦截器 ps:拦截后需要返回config
    instance.interceptors.request.use(config =>{
        return config
    }, error => {
    })
    instance.interceptors.response.use(config =>{
        return config.data
    }, error => {
    })
    return  instance(config)
}