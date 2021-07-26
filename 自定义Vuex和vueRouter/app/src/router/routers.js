let Vue

class Router {
  constructor(options) {
    this.routes = options.routes
    this.mode = options.mode
    this.current = '/'
    this._init()
  }
  _init() {
    if (this._init.mode === 'hash') {
      window.addEventListener('hashchange', function () {
        this.current = window.location.hash.slice(1)
      })
    } else {
      window.addEventListener('popstate', function () {
        this.current = window.location.hash.slice()
      })
    }
  }
}

Router.install = _Vue => {
  Vue = _Vue

  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    render(h) {
      return h('a', {
        attrs: {
          href: `#${this.to}`
        }
      })
    }
  })

  Vue.component('router-view', {
    render(h) {
      let component = null
      return h(component)
    }
  })
}

export default Router
