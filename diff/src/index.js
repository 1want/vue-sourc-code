import h from './snabbdom/h'

const p1 = h('ul', {}, [
  h('li', {}, '苹果'),
  h('li', {}, '香蕉'),
  h('li', {}, [h('span', {}, 'A'), h('span', {}, 'B')])
])

// console.log(p1)
