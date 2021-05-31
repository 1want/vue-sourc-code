// collect引用了endToken的内存地址，所以所有操作都会影响到endToken
export default tokens => {
  const endToken = []
  const sections = []
  let collect = endToken
  tokens.forEach(e => {
    const token = e
    switch (token[0]) {
      case '#':
        // 当首次把student压入栈时，改变collect的角色，让它成为student[student.length-1][2]这个角色
        // 此后的push操作都是在往student[2]的里面添加子内容
        // token[2]是往当前这项token['#','token']末尾再添加一个空数组用来存储子元素
        collect.push(token)
        sections.push(token)
        collect = token[2] = []
        break
      case '/':
        sections.pop()
        // 首次出栈时检验sections是否还有内容，有内容就说明当前pop出去的是最尾栈
        // 需要将它添加到上一个栈的子元素内
        collect =
          sections.length > 0 ? sections[sections.length - 1][2] : endToken
        break
      default:
        collect.push(token)
    }
  })
  return endToken
}
