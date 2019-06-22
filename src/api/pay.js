/**
 * 支付相关
 */


/**
 * 同小程序requestPayment
 * @export
 * @param {*} args
 */
export function requestPayment (...args) {
  wx.requestPayment(...args)
}

export function openCard (...args) {
  wx.openCard(...args)
}
