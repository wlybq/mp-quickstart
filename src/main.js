import 'utils/prototype'
import Vue from 'vue'
import App from './App'
import main from 'mixins/main/main'
import mpvueRouterPatch from 'mpvue-router-patch'
import Vuerify from 'vuerify'
import VuerifyDirective from 'v-vuerify-next'
import formValidateRules from './rules/form-validate-rules'
import { $http } from 'utils/http'

Vue.prototype.$http = $http

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use(mpvueRouterPatch)
Vue.use(VuerifyDirective)
Vue.use(Vuerify, formValidateRules)
Vue.mixin(main) // 全局混淆

const app = new Vue(App)
app.$mount()
