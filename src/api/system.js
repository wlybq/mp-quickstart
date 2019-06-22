
import { toPromise } from 'utils/util'

/**
 * 获取系统信息
 * @param opt
 */
export function getSystemInfo (opt) {
  return wx.getSystemInfo(opt)
}

/**
 * 拨打电话
 * @param mobile
 */
export function makePhoneCall (phoneNumber) {
  return toPromise(wx.makePhoneCall, {phoneNumber})
}

/**
 * 设置剪贴板内容
 * @param data
 */
export function setClipboardData (data, opt) {
  wx.setClipboardData({
    data,
    ...opt
  })
}

