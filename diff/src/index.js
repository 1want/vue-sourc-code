import h from './snabbdom/h'
import patch from './snabbdom/patch'

const p = h('h1', {}, 'hello')
const container = document.getElementById('container')

patch(container, p)
