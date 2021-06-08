import { def } from './utils'
import defineReactive from './defineReactive'
import { methods } from './array'

export default class Observer {
  constructor(obj) {
    def(obj, '__ob__', this, false)
    if (Array.isArray(obj)) {
      Object.setPrototypeOf(obj, methods)
    } else {
      this.walk(obj)
    }
  }
  walk(obj) {
    for (var i in obj) {
      defineReactive(obj, i)
    }
  }
}
