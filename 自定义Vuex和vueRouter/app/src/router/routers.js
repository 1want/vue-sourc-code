// 参考资料
// 1. https://www.bilibili.com/video/BV14y4y1C7F2
// 2. http://www.dennisgo.cn/Articles/Vue/vueRouter.html
// 3. https://github.com/louzhedong/blog/issues/119

let Vue

class Router {
  constructor(options) {
    this.routes = formatRouter(options.routes)
    this.mode = options.mode || 'hash'
    this.current = '/'
    this.historyRoute = ['/']
    this._init()
  }
  _init() {
    if (this.mode === 'hash') {
      window.addEventListener('hashchange', () => {
        this.current = window.location.hash.slice(1) || '/'
        this.historyRoute.push(this.current)
      })
    } else {
      window.addEventListener('popstate', () => {
        this.current = window.location.hash.slice(1) || '/'
        this.historyRoute.push(this.current)
      })
    }

    Vue.util.defineReactive(this, 'current')
  }

  push(path) {
    this.current = path
    window.location.hash = '#' + path
    this.historyRoute.push(this.current)
  }
  go(num) {
    if (!num) {
      window.location.reload()
    } else {
      const res = this.historyRoute.findIndex(e => e === this.current)
      if (res - Math.abs(-num) >= 0) {
        this.current = this.historyRoute[res - Math.abs(-num)]
        window.location.hash = '#' + this.current
      } else {
        throw new Error('no route')
      }
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
