
import store from 'store/index'
import lifecycle from './lifecycle'
import methods from './methods'
import computed from './computed'
import watch from './watch'
import { RESPONSE_SUCCESS_CODE } from 'config/const'

/**
 * 全局mixin
 */
const main = {
  store,
  ...lifecycle,
  data () {
    return {
      RESPONSE_SUCCESS_CODE
    }
  },
  methods,
  computed,
  watch
}

// 导出
export default main
