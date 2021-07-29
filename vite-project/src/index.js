import observe from './observe'
import Watcher from './Watcher'

const obj = {
  a: {
    b: 2
  }
}

observe(obj)

new Watcher(obj, 'a.b', (newV, oldV) => {
  console.log(newV, oldV)
})
obj.a
