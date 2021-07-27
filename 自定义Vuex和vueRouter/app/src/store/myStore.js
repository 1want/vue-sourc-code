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
    options.getters && this.handleGetters(options.getters)
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
  handleGetters(getters) {
    Object.keys(getters).map(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })
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
