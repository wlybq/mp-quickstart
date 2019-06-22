

/**
 *微信分享api封装
 */

import { toPromise, print } from 'utils/util'

/**
 * 显示当前页面的转发按钮
 */
export function showShareMenu (options = {}) {
  return toPromise(wx.showShareMenu, {withShareTicket: true, ...options})
}

/**
 * 主动拉起转发，进入选择通讯录界面。
 * @param options
 */
export function shareAppMessage (options = {}) {
  wx.shareAppMessage(options)
}

/**
 * 获取转发详细信息
 * @param options
 * @returns {*}
 */
export function getShareInfo (options = {}) {
  return toPromise(wx.getShareInfo, options)
}

/**
 * 隐藏转发按钮
 * @param options
 * @returns {*}
 */
export function hideShareMenu (options = {}) {
  return toPromise(wx.hideShareMenu, options)
}

