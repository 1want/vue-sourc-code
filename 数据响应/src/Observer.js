import { def } from './utils'
import defineReactive from './defineReactive'
import { arrayMethod } from './array'
import observe from './observe'
import Dep from './Dep'

export default class Observer {
  constructor(obj) {
    this.dep = new Dep()
    def(obj, '__ob__', this, false)
    if (Array.isArray(obj)) {
      Object.setPrototypeOf(obj, arrayMethod)
      this.observeArray(obj)
    } else {
      this.walk(obj)
    }
  }
  walk(obj) {
    for (var i in obj) {
      defineReactive(obj, i)
    }
  }
  observeArray(obj) {
    for (var i of obj) {
      observe(i)
    }
  }
}
