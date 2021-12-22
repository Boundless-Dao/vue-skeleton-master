import instance from '../utils/request'
import {
    baseApi
} from "../utils/host";

// 登录
export function login(params) {
    return instance.post(`${baseApi}api/auth/login`, params).then(res => res.data);
}