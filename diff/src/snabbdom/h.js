import vnode from './vnode'

export default function (sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error('h函数必须传三个参数')
  }
  if (typeof c === 'string' || typeof c === 'number') {
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    let children = []
    c.forEach(item => {
      if (!(typeof item === 'object' && item.hasOwnProperty('sel')))
        throw new Error('传入的数组参数中有项不是h函数')
      children.push(item)
    })
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    let children = [c]
    return vnode(sel, data, children, undefined, undefined)
  }
}
