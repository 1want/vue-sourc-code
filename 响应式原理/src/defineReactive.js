import observe from './observe'
import Dep from './Dep'

function defineReactive(obj, key, value) {
  if (!value) {
    value = obj[key]
  }

  const dep = new Dep()
  let c = observe(value)

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        console.log(key + '进入收集依赖')
        dep.depend()
        if (c) {
          c.dep.depend()
        }
      }
      return value
    },
    set(v) {
      console.log('设置新值阶段')
      if (v === value) return
      value = v
      c = observe(v)
      dep.notify()
    }
  })
}

export default defineReactive
