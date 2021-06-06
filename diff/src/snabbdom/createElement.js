export const createElement = vnode => {
  const newDom = document.createElement(vnode.sel)

  if (vnode.text != '' && !vnode.children) {
    newDom.innerText = vnode.text
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    vnode.children.forEach(item => {
      const chDOM = createElement(item)
      newDom.appendChild(chDOM)
    })
  }

  vnode.elm = newDom
  return newDom
}
