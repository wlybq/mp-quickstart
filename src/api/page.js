

/**
 * 设置微信头部标题方法，该方法如果调用失败会一直调用，知道调用成功为止
 * @param title
 */
export function setTitle (title, config) {
  config = {fail () { setTitle(title) }, ...config}
  wx.setNavigationBarTitle({ title, ...config })
}

/**
 * 同小程序原生showLoading
 * @param title
 * @param mask
 */
export function showLoading (title = '加载中...', mask = true, options) {
  wx.showLoading({title, mask, ...options})
}
/**
 * 同小程序原生hideLoading
 */
export function hideLoading (...args) {
  wx.hideLoading(...args)
}

/**
 * 同小程序pageScrollTo
 */
export function pageScrollTo (...args) {
  wx.pageScrollTo(...args)
}

/**
 * 同小程序hideToast
 */
export function hideToast (...args) {
  wx.hideToast(...args)
}

/**
 * 同小程序showToast
 */
export function showToast (...args) {
  wx.showToast(...args)
}

/**
 * 获取页面元素查询实例
 * @returns {*}
 */
export function createSelectorQuery () {
  return wx.createSelectorQuery()
}

/**
 * 获取某个元素属性
 * @param selector String 查询元素calss
 * @param fn Function 获取到信息回调，查询元素属性集合通过回调函数参数返回
 */
export function getElementInfos (selector, fn) {
  const _self = this
  const query = createSelectorQuery()
  query.select(selector).boundingClientRect((rect) => {
    fn && fn.call(_self, rect)
  }).exec()
}

/**
 * 同小程序getCurrentPages
 * @return {*}
 */
export function getCurrPages () {
  return getCurrentPages()
}

/**
 * 路由跳转
 */
export function routerPush (...args) {
  wx.navigateTo(...args)
}

/**
 * 路由重启
 */
export function routerRelunch (...args) {
  wx.reLaunch(...args)
}

/**
 * 路由替换
 */
export function routerReplace (...args) {
  wx.redirectTo(...args)
}

/**
 * 路由替换
 */
export function routerSwitchTab (...args) {
  wx.switchTab(...args)
}

/**
 * 路由返回
 */
export function routerBack (...args) {
  wx.navigateBack(...args)
}

/**
 * 停止当前页面下拉刷新
 */
export function stopPullDownRefresh () {
  wx.stopPullDownRefresh()
}

/**
 * 延迟一段时间到下一时间片再执行
 */
export function nextTick (fn) {
  wx.nextTick(fn)
}

/**
 * 同小程序createIntersectionObserver
 */
export function createIntersectionObserver (...args) {
  return wx.createIntersectionObserver(...args)
}
