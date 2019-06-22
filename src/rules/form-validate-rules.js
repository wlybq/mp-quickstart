

/**
 * 验证规则
 */
export default {
  // 电话号码验证规则
  mobile: {test: /^[1][3-9][0-9]{9}$/, message: '请输入有效的手机号码'},
  // 密码验证规则
  password: {test: /[\s\S]{6,32}$/, message: '请输入有效6-32位密码'}
}
