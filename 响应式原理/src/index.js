import observe from './observe'
import Watcher from './Watcher'

const obj = {
  a: {
    b: {
      c: 3
    }
  }
}

observe(obj)

new Watcher(obj, 'a.b.c', (newV, oldV) => {
  console.log(newV, oldV)
})
