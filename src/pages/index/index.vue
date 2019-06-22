<template>
  <div class="page">
    <div class="header">
      <wux-navbar theme="dark">
        <view>首页</view>
      </wux-navbar>
    </div>
    <div class="container">
      <wux-cell-group title="自定义组件">
        <NumberControl :value="count" @sub="(val) => this.$store.commit('sub', val)" @plus="(val) => this.$store.commit('plus', val)"/>
      </wux-cell-group>
    </div>
    <div class="footer">
      <wux-tabbar defaultCurrent="tab1" position="bottom" @change="navChange" :safeArea="true">
        <wux-tabbar-item key="tab1" title="首页">
          <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-on" />
          <wux-icon wux-class="icon" type="ios-home" size="22" slot="icon-off" />
        </wux-tabbar-item>
        <wux-tabbar-item key="tab2" title="功能页">
          <wux-icon wux-class="icon" type="ios-cube" size="22" slot="icon-on" />
          <wux-icon wux-class="icon" type="ios-cube" size="22" slot="icon-off" />
        </wux-tabbar-item>
      </wux-tabbar>
    </div>
  </div>
</template>

<script>
  import index from './index.controller'
  import NumberControl from 'components/number-control/number-control'

  export default {
    ...index,
    // 引入自定义组件只能在此处导入声明，否则将得不到预期的效果
    // 如果是第三方的组件，直接在本页面模块的项目下配置即可
    components: {
      NumberControl
    }
  }
</script>

<style scoped lang="scss">
  @import "./index.style";
</style>
