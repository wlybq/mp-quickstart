

import store from 'store/index'
import md5 from 'js-md5'
import { APP_ID, APP_SECRET } from 'config/config'
import { toPromise, print } from 'utils/util'
import { login, getSetting, getUserInfo } from 'api/user'

/**
 * 获取验证数据函数
 * @returns {{token, timestamp: number, sign}}
 */
export function getValidData () {
  const timestamp = (+new Date())
  return {
    token: store.state.user.token,
    timestamp,
    // md5(AGENT_APP_ID . timestamp . md5(AGENT_APP_SECRET))
    sign: md5(APP_ID + timestamp + md5(APP_SECRET))
  }
}

/**
 * 获取code登录凭证
 */
export async function getCode () {
  const loginResult = await toPromise(login)
  print('getCode', loginResult)
  if (loginResult.code) {
    return loginResult.code
  } else {
    return ''
  }
}

/**
 *  获取用户授权情况
 */
export async function userIsAccedit () {
  const userSetting = await toPromise(getSetting)
  print('getSetting', userSetting)
  // 已经授权，返回true下一步
  return !!userSetting.authSetting['scope.userInfo']
}

/**
 * 调用 getUserInfo 获取头像昵称等信息，不会弹框
 */
export async function getUserSignData () {
  // 直接调用 getUserInfo 获取头像昵称等信息，不会弹框
  const userSignData = await toPromise(getUserInfo)
  print('getUserSignData', userSignData)
  return userSignData
}
