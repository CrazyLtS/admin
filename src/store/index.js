import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    userName: '',
    // 侧边栏菜单宽度
    asideWidth: '60px',
    modeName: '管理员信息',
    activeIndex: '2'
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})
