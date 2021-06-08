import patchVnode from './patchVnode'
import { createElement } from './createElement'

function checkVnode(newV, oldV) {
  return newV.sel === oldV.sel && newV.key === oldV.key
}
export default function updateChildren(parentElm, oldVnode, newVnode) {
  let newStartIdx = 0
  let oldStartIdx = 0
  let newEndIdx = newVnode.length - 1
  let oldEndIdx = oldVnode.length - 1
  // 新前节点
  let newStartVnode = newVnode[0]
  // 新后节点
  let newEndVnode = newVnode[newEndIdx]
  // 旧前节点
  let oldStartVnode = oldVnode[0]
  // 旧后节点
  let oldEndVnode = oldVnode[oldEndIdx]

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (checkVnode(oldStartVnode, newStartVnode)) {
      // 新前与旧前
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldVnode[++oldStartIdx]
      newStartVnode = newVnode[++newStartIdx]
    } else if (checkVnode(oldEndVnode, newEndVnode)) {
      // 新后与旧后
      patchVnode(oldEndVnode, newEndVnode)
      oldEndVnode = oldVnode[--oldEndIdx]
      newEndVnode = newVnode[--newEndIdx]
    } else if (checkVnode(oldStartVnode, newEndVnode)) {
      // 新后与旧前
      patchVnode(oldStartVnode, newEndVnode)
      parentElm.insertBefore(oldStartVnode.elm, newEndVnode.elm.nextSibling)
      oldStartVnode = oldVnode[++oldStartIdx]
      newEndVnode = oldVnode[--newEndIdx]
    } else if (checkVnode(oldEndVnode, newStartVnode)) {
      // 新前与旧后
      patchVnode(oldEndVnode, newStartVnode)
      parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
      oldEndVnode = oldVnode[--oldEndIdx]
      newStartVnode = oldVnode[++newStartIdx]
    } else {
    }
  }

  if (newStartIdx <= newEndIdx) {
    // 如果新节点还有，说明需要被添加到最底部
    const before =
      newVnode[newEndIdx + 1] == null ? null : newVnode[newEndIdx + 1].elm

    for (let i = newStartIdx; i <= newEndIdx; i++) {
      parentElm.insertBefore(createElement(newVnode[i]), before)
    }
  } else if (oldStartIdx <= oldEndIdx) {
    // 如果老节点没有循环完，则说明需要删除中间多余的部分
    for (let i = oldStartIdx; i <= oldEndIdx; i++) {
      parentElm.removeChild(oldVnode[i].elm)
    }
  }
}
