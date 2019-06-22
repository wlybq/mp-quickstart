

import Vue from 'vue'
import Vuex from 'vuex'
import service from './modules/service/index'


Vue.use(Vuex)
/**
 * @type {Store}
 */
const store = new Vuex.Store({
  modules: {
    service
  }
})

export default store
