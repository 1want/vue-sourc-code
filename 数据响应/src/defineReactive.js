import observe from './observe'

export default function (data, key, value) {
  if (arguments.length === 2) {
    value = data[key]
  }

  let childOb = observe(data[key])
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('访问了' + key)
      return value
    },
    set(val) {
      console.log('改变了' + key)
      value = val
      childOb = observe(val)
    }
  })
}
