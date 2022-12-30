import axios from "axios";
import error from "element-plus/packages/utils/error";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 60000
});

// request 拦截器
service.interceptors.request.use(
  config => {
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    config.headers["Authorization"] = "";

    // 判断请求方式
    if (config.method === "post") config.data = { ...config.data };
    if (config.method === "get") config.params = { ...config.params };

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
