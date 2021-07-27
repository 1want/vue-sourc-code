import Vue from 'vue'
import Vuex from './myStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  mutations: {
    add(state, num) {
      state.num += num
    }
  },
  actions: {
    add({ commit }, payload) {
      setTimeout(() => {
        commit('add', payload)
      }, 1000)
    }
  },
  getters: {
    getNum(state) {
      return state.num * 2
    },
    getNum2(state) {
      return state.num * 2
    }
  }
})
