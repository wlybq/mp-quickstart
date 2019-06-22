import { print } from 'utils/util'

export default {
  // vue lifecycle
  beforeCreate () {
    // print('beforeCreate, this)
  },
  created () {
    // print('created', this)
  },
  beforeMount () {
    // print('beforeMount, this)
  },
  mounted () {
    // print('mounted', this)
  },
  beforeUpdate () {
    // print('beforeUpdate', this)
  },
  updated () {
    // print('updated', this)
  },
  activated () {
    // print('activated', this)
  },
  deactivated () {
    // print('deactivated', this)
  },
  beforeDestroy () {
    // print('beforeDestroy', this)
  },
  destroyed () {
    // print('destroyed', this)
  },
  // min program lifecycle
  onLaunch () {
    // print('onLaunch', this)
  },
  onLoad () {
    // print('onLoad', this)
  },
  // 监听页面显示
  onShow () {
    // print('onShow', this)
  },
  // 监听页面隐藏
  onHide () {
    // print('onHide', this)
  },
  // 监听页面初次渲染完成
  onReady () {
    // print('onReady', this)
  },
  // 监听页面卸载
  onUnload () {
    // print('onUnload', this)
  },
  // 监听用户下拉动作
  onPullDownRefresh () {
    // print('onPullDownRefresh', this)
  },
  // 页面上拉触底事件的处理函数
  onReachBottom () {
    // print('onReachBottom', this)
  },
  // 页面滚动
  onPageScroll () {
    // print('onPageScroll', this)
  },
  // 当前是 tab 页时，点击 tab 时触发
  onTabItemTap () {
    // print('onTabItemTap', this)
  }
}
