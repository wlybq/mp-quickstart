module.exports = {
  NODE_ENV: '"production"',
  ENV: '"READY"', // 环境参数 TEST-测试服、READY-预发布、MASTER-正式服

  // 请求接口地址
  REQUEST_URL_TEST: JSON.stringify('https://test.fdyunshang.com/applet/'),
  REQUEST_URL_READY: JSON.stringify('https://agent5.fdyunshang.com/applet/'),
  REQUEST_URL_MASTER: JSON.stringify('https://agent.fdyunshang.com/applet/'),

  // socket协议地址
  WEBSOCK_URL_TEST: JSON.stringify('wss://inform.fdyunshang.com'),
  WEBSOCK_URL_READY: JSON.stringify('wss://inform.fdyunshang.com'),
  WEBSOCK_URL_MASTER: JSON.stringify('wss://inform.fdyunshang.com')
}
