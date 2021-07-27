let Vue

class Store {
  constructor(options) {
    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })
    this.mutations = options.mutations
    this.actions = options.actions
    this.getters = {}
  }

  get state() {
    return this._vm._data.$$state
  }
  commit = (type, payload) => {
    console.log(type, payload)
    this.mutations[type](this.state, payload)
  }

  dispatch = (type, payload) => {
    this.actions[type](this, payload)
  }
}

Store.install = _Vue => {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default Store
