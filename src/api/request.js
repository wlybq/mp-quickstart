/**
 * 同小程序uploadFile
 * @param args
 * @return {*|boolean}
 */
export function uploadFile (...args) {
  return wx.uploadFile(...args)
}

/**
 * 小程序socket链接方法
 */
export function socketConnect (url, data, header, options) {
  return wx.connectSocket({
    url,
    data,
    header,
    ...options
  })
}
