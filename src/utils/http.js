import Fly from 'flyio/dist/npm/wx'

const $http = new Fly

const ENV = process.env.ENV
const GET_REQUEST_DOMAIN_KEY = `REQUEST_URL_${ENV}`
const REQUEST_DOMAIN = `${process.env[GET_REQUEST_DOMAIN_KEY]}`

// 配置Fly实例
// 设置请求基础地址
$http.config.baseURL = REQUEST_DOMAIN
const $https = [$http]

// 合并请求参数处理函数
function paramsMerge (args) {
  // 可以在这里设置公共参数什么的
  if (args.length < 1) throw Error('url not find')
  args[1] = {
    ...(args[1] || {})
  }
}

// 设置拦截器
$https.forEach($http => {
  /**
   * post,get方法装饰
   */
  // 劫持fly库post,get方法
  const nativePost = $http.post
  const nativeGet = $http.get

  // 装饰post
  $http.post = async function (...args) {
    // 合并请求参数
    paramsMerge(args)
    const result = await nativePost.call($http, ...args)
    return result
  }
  // 装饰get
  $http.get = async function (...args) {
    // 合并请求参数
    paramsMerge(args)
    const result = await nativeGet.call($http, ...args)
    return result
  }

  // $http.lock() // 请求挂起
  // $http.unlock() // 解锁请求
  // $http.clear() // 清除请求队列

  // 请求发起时拦截
  $http.interceptors.request.use((request) => {
    // print('$http request', `${request.baseURL}${request.url}`, request)
    // 请求前验证balabala....
    // 如果要在此处做异步校验操作的话，需要返回一个Promise的对象,比如再次new一个fly实例发出请求并返回
    return request // 返回request对象继续请求
  })

  // 请求完成时拦截
  $http.interceptors.response.use((response) => {
    // print('$http response', JSON.stringify(response.data))
    // 返回验证balabala....
    return response
  // eslint-disable-next-line handle-callback-err
  }, (err) => {
    // 请求失败
    // print('err', err)
  })
})

// 导出
export {
  $http
}
