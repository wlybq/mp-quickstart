

module.exports = [
  // other模块页面配置
  {
    path: 'packageOther/index/index',
    subPackage: true, // 设置当前模块为子模块
    config: {
      navigationBarTitleText: '页面2',
      usingComponents: {
        'wux-cell-group': '/static/uilibs/wux-weapp/cell-group/index',
        'wux-cell': '/static/uilibs/wux-weapp/cell/index'
      }
    }
  }
]
