import observe from './observe'
import Dep from './Dep'

function defineReactive(obj, key, value) {
  if (!value) {
    value = obj[key]
  }

  const dep = new Dep()
  observe(value)

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.depend()
      }
      return value
    },
    set(v) {
      if (v === value) return
      value = v
      observe(v)
      dep.notify()
    }
  })
}

export default defineReactive
