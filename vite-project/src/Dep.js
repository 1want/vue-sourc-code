let id = 0
class Dep {
  constructor() {
    this.id = ++id
    this.subs = new Set()
  }

  addSub(sub) {
    this.subs.add(sub)
  }
  depend() {
    if (Dep.target) {
      Dep.target.addDep(this)
    }
  }

  notify() {
    this.subs.forEach(watch => watch.update())
  }
}

Dep.target = null
export default Dep
