import observe from './observe'
import Watcher from './Watcher'
import defineReactive from './defineReactive'

const obj = {
  a: {
    b: {
      c: 3
    }
  }
}

observe(obj)

// $set方法
function set(target, key, value) {
  //新增的属性也变成响应式的
  defineReactive(target, key, value)
  target.__ob__.dep.notify()
}

set(obj.a.b, 'd', 8)

new Watcher(obj, 'a.b.d', (newV, oldV) => {
  console.log(newV, oldV)
})

obj.a.b.d = 88
