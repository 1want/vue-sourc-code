import Vue from 'vue'
import store from './myStore'

Vue.use(store)

export default new store({
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
  getters: {}
})
