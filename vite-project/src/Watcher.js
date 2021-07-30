import Dep from './Dep'

let id = 0
class Watcher {
  constructor(obj, key, cb) {
    this.id = ++id
    this.obj = obj
    this.depsId = {}
    this.getter = format(key)
    this.callback = cb
    this.oldValue = this.get()
  }

  addDep(dep) {
    if (!this.depsId.hasOwnProperty(dep.id)) {
      dep.addSub(this)
      this.depsId[dep.id] = dep
    }
  }

  update() {
    const val = this.get()
    if (val != this.oldValue) {
      this.callback.call(this, val, this.oldValue)
    }
  }
  get() {
    Dep.target = this
    const val = this.getter(this.obj)
    Dep.target = null
    return val
  }
}

function format(str) {
  const arr = str.split('.')
  return function (obj) {
    for (let key of arr) {
      if (!obj) return
      obj = obj[key]
    }
    return obj
  }
}

export default Watcher
