

/**
 * 获取用户信息
 * @param args
 */
export function getUserInfo (...args) {
  wx.getUserInfo(...args)
}

/**
 * 微信授权登录获取code
 * @param args
 */
export function login (...args) {
  wx.login(...args)
}

/**
 * 获取授权情况
 * @param args
 */
export function getSetting (...args) {
  wx.getSetting(...args)
}
