

const indexModulePages = require('./pages/pages')
const otherModulePages = require('./packageOther/pages')

/**
 * 页面配置
 * @type {*[]}
 */
module.exports = [
  ...indexModulePages,
  ...otherModulePages
]
