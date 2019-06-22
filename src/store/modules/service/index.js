'use strict'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

const service = {
  state: {
    count: 0
  },
  mutations,
  actions,
  getters
}

export default service

