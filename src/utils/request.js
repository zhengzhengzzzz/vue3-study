import axios from "axios";
import querystring from "querystring";
const instance = axios.create({
    //网络请求的公共配置
    timeout: 5000.
})
//拦截器最常用
//发送数据之前
instance.interceptors.request.use(
    config => {
        if (config.method == "post") {
            config.data = querystring.stringify(config.data)
        }
        // config:包含着网络请求的所有信息
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//获取数据之前
instance.interceptors.response.use(
    response => {
        return response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance;