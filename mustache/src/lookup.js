export default (data, keys) => {
  if (keys.indexOf('.') != -1) {
    var key = keys.split('.')
    var temp = data
    for (let i of key) {
      temp = temp[i]
    }
    return temp
  }

  return data[keys]
}
