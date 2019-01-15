/*
核心管理对象
*/

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutaions'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
