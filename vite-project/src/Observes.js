import defineReactive from './defineReactive'
import { def } from './utils.js'
import { arrayMethod } from './array'
import observe from './observe'
import Dep from './Dep'

class Observers {
  constructor(obj) {
    this.dep = new Dep()
    def(obj, '__ob__', this)

    if (Array.isArray(obj)) {
      Object.setPrototypeOf(obj, arrayMethod)
      this.observeArray(obj)
    } else {
      this.walk(obj)
    }
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key)
    })
  }
  observeArray(obj) {
    for (var i of obj) {
      observe(i)
    }
  }
}

export default Observers
