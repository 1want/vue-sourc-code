import vnode from './vnode'
import { createElement } from './createElement'
import patchVnode from './patchVnode'

export default (oldVnode, newVnode) => {
  // 判断老节点是不是虚拟节点，不是就包装成虚拟节点
  if (!oldVnode.sel) {
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(),
      undefined,
      undefined,
      undefined,
      oldVnode
    )
  }
  // 判断是否是同一个标签，同一个节点
  if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
    patchVnode(oldVnode, newVnode)
  } else {
    let element = createElement(newVnode)
    if (oldVnode.elm.parentNode && element) {
      oldVnode.elm.parentNode.insertBefore(element, oldVnode.elm)
    }
  }
}
