import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData: [
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李一',
        matter: '将大姐夫IE方式了'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李二',
        matter: '顺丰标题多个人'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李三',
        matter: '人格让热河个人混入'
      },
      {
        date: new Date().toLocaleDateString(),
        name: '李四',
        matter: '额惹人厌有几天地方'
      }
    ],
    userName: 'Admin',
    passWord: '12345678',
    newDataName: '',
    newDataMatter: '',
    isOn: false
  },
  getters: {
    newName (state) {
      return state.newDataName
    },
    newMatter (state) {
      return state.newDataMatter
    },
    listData (state) {
      return state.listData
    }
  },
  mutations: {
    changeName (state, newValue) {
      state.userName = newValue
    },
    changePassWord (state, newValue) {
      state.passWord = newValue
    },
    handleNameChange (state, newValue) {
      state.newDataName = newValue
    },
    handleMatterChange (state, newValue) {
      state.newDataMatter = newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
