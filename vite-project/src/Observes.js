import defineReactive from './defineReactive'
import { def } from './utils.js'

class Observers {
  constructor(obj) {
    def(obj, '__ob__', this)
    this.walk(obj)
  }

  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key)
    })
  }
}

export default Observers
