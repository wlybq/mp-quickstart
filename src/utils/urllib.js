const ENV = process.env.ENV
const agentEnv = `REQUEST_URL_${ENV}` // 请求接口地址
const socketDomain = `WEBSOCK_URL_${ENV}` // socket域名

/**
 * 根据环境ENV获取请求地址（请求域在项目根目录config/xxx.env.js中配置），返回完整的请求地址（代理商接口）
 * @param {string} 接口url(除域名)
 * @returns {string} 完整地址
 */
export function getReqUrl (url) {
  return `${process.env[agentEnv]}${url.startsWith('/') ? url.substr(1) : url}`
}

/**
 * 根据环境获取socket链接地址（请求域在项目根目录config/xxx.env.js中配置），返回完整的请求地址
 */
export function getSocketUrl (url) {
  return `${process.env[socketDomain]}`
}
