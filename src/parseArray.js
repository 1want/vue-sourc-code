import lookUp from './lookup'
import renderTemplate from './renderTemplate'

export default (token, data) => {
  var v = lookUp(data, token[1])
  var result = ''
  for (let i of v) {
    result += renderTemplate(token[2], { ...i, '.': i })
  }
  return result
}
