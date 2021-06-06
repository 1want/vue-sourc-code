import h from './snabbdom/h'
import patch from './snabbdom/patch'

const p = h('ul', {}, 'hello')

const p1 = h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, 'C'),
  h('li', {}, 'D')
])

const container = document.getElementById('container')
const btn = document.getElementsByTagName('button')[0]

btn.onclick = function () {
  patch(p, p1)
}
patch(container, p)
