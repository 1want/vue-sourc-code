import patchVnode from './patchVnode'
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
    // 新前与旧前
    if (checkVnode(oldStartVnode, newStartVnode)) {
      patchVnode(oldStartVnode, newStartVnode)
      oldStartVnode = oldVnode[++oldStartIdx]
      newStartVnode = newVnode[++newStartIdx]
    }
  }
}
