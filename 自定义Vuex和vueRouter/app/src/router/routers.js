let Vue

class Router {
  constructor(options) {
    this.routes = formatRouter(options.routes)
    this.mode = options.mode
    this.current = '/'
    this._init()
  }
  _init() {
    Vue.util.defineReactive(this, 'current')

    if (this.mode === 'hash') {
      window.addEventListener('hashchange', function () {
        this.current = window.location.hash.slice(1) || '/'
        console.log(this.current)
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
      return h(
        'a',
        {
          attrs: {
            href: `#${this.to}`
          }
        },
        this.$slots.default
      )
    }
  })

  Vue.component('router-view', {
    render(h) {
      let component = null
      const options = this.$router
      component = options.routes[options['current']]
      return h(component)
    }
  })
}

function formatRouter(routes) {
  return routes.reduce((prev, current) => {
    prev[current.path] = current.component
    return prev
  }, {})
}
export default Router
