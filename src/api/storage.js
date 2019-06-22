
import { extime as extimef } from 'config/config'
import { toPromise } from 'utils/util'

/**
 * wx.getStorageInfoSync
 * wx.getStorageInfo
 * wx.clearStorageSync
 * wx.clearStorage
 * wx.removeStorageSync
 * wx.removeStorage
 * wx.setStorageSync
 * wx.setStorage
 * wx.getStorageSync
 * wx.getStorage
 */

export function getStorageInfoSync () {}
export function getStorageInfo () {}
export function clearStorageSync () {}
export function clearStorage () {}

/**
 * 删除对应key的缓存数据
 * @param key
 */
export function removeStorageSync (key) {
  wx.removeStorageSync(key)
}
export function removeStorage () {}

/**
 * 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。数据存储上限为 10MB。
 * @param key String | Array 必填 本地缓存中指定的 key
 * @param data any 必填 保存的数据主体
 * @param extime Number 非必填 过期时间，以毫秒为单位
 */
export function setStorageSync (key, data, extime) {
  const dataWrap = { data }
  if (extime && toString.call(extime) === '[object Number]') {
    dataWrap.extime = extime
  }
  wx.setStorageSync(key, dataWrap)
}

export function setStorage (key, data, extime) {
  const dataWrap = { data }
  if (extime && toString.call(extime) === '[object Number]') {
    dataWrap.extime = extime
  }
  return toPromise(wx.setStorage, { key, data: dataWrap })
}

/**
 * 获取缓存数据方法同步版
 * @param key String | Array 必填 获取数据的唯一标识
 * @return Object/String key对应的数据
 */
export function getStorageSync (key) {
  return wx.getStorageSync(key)
}

/**
 * 获取缓存数据方法
 * @param key String | Array 必填 获取数据的唯一标识
 * @return Promise 返回Promise对象
 */
export function getStorage (key) {
  return toPromise(wx.getStorage, { key })
}


/**
 * 保存数据方法同步版本
 * @param key String | Array 必填 保存数据的唯一标识
 * @param data any 必填 保存的数据主体
 * @param extime Number 非必填 过期时间，以毫秒为单位
 */
export function putSync (key, data, extime) {
  extime = +new Date() + (extime || extimef)
  if (key === void 0 || data === void 0) throw new Error('key and data are must')
  setStorageSync(key, data, extime)
}

/**
 * 保存数据方法
 * @param key String | Array 必填 保存数据的唯一标识
 * @param data any 必填 保存的数据主体
 * @param extime Number 非必填 过期时间，以毫秒为单位
 */
export async function put (key, data, fn, extime) {
  extime = +new Date() + (extime || extimef)
  if (key === void 0 || data === void 0) throw new Error('key and data are must')
  const result = await setStorageSync(key, data, extime)
  if (toString.call(result) === '[object Error]') {
    fn && fn(false)
  }
  fn && fn(true)
}

/**
 * 获取缓存数据方法同步版本,如果设置了过期时间且过期时间已经过 将会删除这个key保存的数据，并返回null
 * @param key String | Array 必填 获取数据的唯一标识
 */
export function outSync (key) {
  if (key === void 0 && !key) throw new Error('key\'s must')
  const { data, extime } = getStorageSync(key)
  const now = +new Date()
  if (extime && now > extime) {
    removeStorageSync(key)
    return null
  }
  return data
}

/**
 * 获取缓存数据方法,如果设置了过期时间且过期时间已经过 将会删除这个key保存的数据，并返回null
 * @param key String | Array 必填 获取数据的唯一标识
 * @param fn Function 必填 获取数据回调
 */
export async function out (key, fn) {
  let dataTemp = void 0
  const now = +new Date()
  if (key === void 0 && !key) throw new Error('key\'s must')
  const result = await getStorage(key)
  if (toString.call(result) === '[object Error]') {
    dataTemp = null
  }
  const { data, extime } = result
  if (extime && now > extime) {
    removeStorageSync(key)
    dataTemp = null
  }
  dataTemp = data
  fn && fn(dataTemp)
}



