// 引入配置
import config from '@/config/request/index.ts'

const requestInterceptors = (vm) => {
  /**
   * 请求拦截
   * @param {Object} http
   */
  uni.$u.http.interceptors.request.use(
    (config) => {
      // 可使用async await 做异步操作
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}

      config.data = config.data || {}
      // 演示custom 用处
      if (config.custom.auth == null || config.custom.auth == undefined) {
        config.custom.auth = true
      }
      if (config.custom.auth) {
        config.header.Authorization =
          'Bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmb3JvbmVfNjRlMzE4NjliMmIwOTcuMjEyNzU0MzIiLCJpYXQiOjE2OTI2MDQ1MjEuNzMxOTIsIm5iZiI6MTY5MjYwNDUyMS43MzE5MiwiZXhwIjoxNjkyNjExNzIxLjczMTkyLCJhcHBfY29kZSI6ImZvcm9uZSIsImlkIjoyLCJqd3Rfc2NlbmUiOiJmb3JvbmUifQ.GM1hGLxrI0x4nvh2bhZs012s-909sVcAfiw4ULXE4jQ'
      }
      if (config.custom.loading) {
        uni.showLoading()
      }
      // if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
      // 	return Promise.reject(config)
      // }
      return config
    },
    (
      config // 可使用async await 做异步操作
    ) => Promise.reject(config)
  )
}
const responseInterceptors = (vm) => {
  /**
   * 响应拦截
   * @param {Object} http
   */
  uni.$u.http.interceptors.response.use(
    (response) => {
      /* 对响应成功做点什么 可使用async await 做异步操作*/
      const data = response.data
      // 自定义参数
      const custom = response.config?.custom
      if (data.code !== 200) {
        // 服务端返回的状态码不等于200，则reject()
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        if (custom.toast !== false) {
          uni.$u.toast(data.message)
        }
        // 如果需要catch返回，则进行reject
        if (custom?.catch) {
          return Promise.reject(data)
        } else {
          // 否则返回一个pending中的promise
          return new Promise(() => {})
        }
      }
      return data.data || {}
    },
    (response) => {
      /*  对响应错误做点什么 （statusCode !== 200）*/
      return Promise.reject(response)
    }
  )
}

//  初始化请求配置
const initRequest = (vm) => {
  uni.$u.http.setConfig((defaultConfig) => {
    /* defaultConfig 为默认全局配置 */
    defaultConfig.baseURL = config.baseUrl /* 根域名 */
    return defaultConfig
  })
  requestInterceptors()
  responseInterceptors()
}
export { initRequest }
