import parseArray from './parseArray'

export default (token, data) => {
  let res = ''
  token.forEach(e => {
    if (e[0] === 'text') {
      res += e[1]
    } else if (e[0] === 'name') {
      res += data[e[1]]
    } else if (e[0] === '#') {
      res += parseArray(e, data)
    }
  })
  return res
}
