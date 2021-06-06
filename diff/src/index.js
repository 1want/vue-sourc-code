import h from './snabbdom/h'
import patch from './snabbdom/patch'

const p = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
])

const p1 = h('ul', {}, [
  h('li', { key: 'A' }, 'AAAAAAAA'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'D' }, 'D')
])

const container = document.getElementById('container')
const btn = document.getElementsByTagName('button')[0]

btn.onclick = function () {
  patch(p, p1)
}
patch(container, p)
