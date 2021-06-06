import updateChildren from './updateChildren'
import { createElement } from './createElement'

export default function patchVnode(oldVnode, newVnode) {
  // 如果新节点和老节点是同一个节点不做操作
  if (oldVnode === newVnode) return
  // 新节点仅有文本
  if (newVnode.text && !newVnode.children) {
    if (newVnode.text != oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text
    }
  } else {
    // 新节点没有text属性,有children
    if (oldVnode.children) {
      // 老节点有children,需要进行详细比较
      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children)
    } else {
      // 老节点没有children,清空老节点的文本，把新节点的children添加到DOM中
      oldVnode.elm.innerText = ''
      newVnode.children.forEach(item => {
        const res = createElement(item)
        oldVnode.elm.appendChild(res)
      })
    }
  }
}
