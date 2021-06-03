import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h
} from 'snabbdom'

const patch = init([
  // Init patch function with chosen modules
  classModule, // makes it easy to toggle classes
  propsModule, // for setting properties on DOM elements
  styleModule, // handles styling on elements with support for animations
  eventListenersModule // attaches event listeners
])

const container = document.getElementById('container')

const p1 = h('ul', { class: { box: true } }, [
  h('li', '苹果'),
  h('li', '香蕉'),
  h('a', { props: { href: 'http://www.baidu.com' } }, '百度')
])
patch(container, p1)
