<template>
  <div class="page">
    <div class="header">
      <wux-navbar theme="dark">
        <wux-icon slot="left" type="ios-arrow-back" size="23" @click="toIndex"/>
        <view>功能页</view>
      </wux-navbar>
    </div>
    <div class="container">
      <wux-cell-group title="带说明的列表项">
        <wux-cell title="标题文字"></wux-cell>
        <wux-cell title="禁用状态" disabled></wux-cell>
      </wux-cell-group>
      <wux-cell-group title="带图标、说明的列表项">
        <wux-cell thumb="https://wux.cdn.cloverstd.com/logo.png" title="标题文字" extra="说明文字"></wux-cell>
        <wux-cell thumb="https://wux.cdn.cloverstd.com/logo.png" title="标题文字" extra="说明文字"></wux-cell>
      </wux-cell-group>
      <wux-cell-group title="带跳转的列表项" label="底部说明文字">
        <wux-cell title="标题文字" is-link extra="说明文字"></wux-cell>
        <wux-cell title="标题文字" is-link label="附加描述" extra="说明文字"></wux-cell>
        <wux-cell title="只显示箭头" is-link></wux-cell>
        <wux-cell title="跳转到首页" is-link url="/pages/index/index" open-type="switchTab"></wux-cell>
      </wux-cell-group>
      <wux-cell-group title="微信开放能力">
        <wux-cell title="打开客服会话" is-link open-type="contact" @contact="onContact($event)"></wux-cell>
        <wux-cell title="触发用户转发" is-link open-type="share"></wux-cell>
        <wux-cell title="获取用户信息" is-link open-type="getUserInfo" @getuserinfo="onGotUserInfo($event)"></wux-cell>
        <wux-cell title="获取用户手机号" is-link open-type="getPhoneNumber" @getphonenumber="onGotPhoneNumber($event)"></wux-cell>
      </wux-cell-group>
    </div>
    <div class="footer">
      <wux-tabbar defaultCurrent="tab2" position="bottom" @change="navChange" :safeArea="true">
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

  export default {
    ...index,
    components: {
    }
  }
</script>

<style scoped lang="scss">
  @import "./index.style";
</style>
