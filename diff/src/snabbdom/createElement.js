export default (oldE, newE) => {
  const el = document.createElement(newE.sel)
  // 判断是否是文本类型
  if (
    newE.text != '' &&
    (newE.children === undefined || newE.children.length === 0)
  ) {
    el.innerText = newE.text
    oldE.parentNode.insertBefore(el, oldE)
  }
}
