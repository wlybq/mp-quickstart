

module.exports = [
  // 店铺首页
  {
    path: 'pages/index/index',
    config: {
      navigationBarTitleText: '首页',
      usingComponents: {
        'wux-cell-group': '/static/uilibs/wux-weapp/cell-group/index',
        'wux-cell': '/static/uilibs/wux-weapp/cell/index'
      }
    }
  }
]
