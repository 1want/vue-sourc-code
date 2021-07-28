import observe from './observe'
import Watcher from './Watcher'

const obj = {
  a: {
    b: 2
  }
  // name: 'jack'
}

observe(obj)

// new Watcher(obj, 'name', (newV, oldV) => {
//   console.log(newV, oldV)
// })

// obj.name = ' walt'

new Watcher(obj, 'a.b', (newV, oldV) => {})
obj.a.b = 3
// new Watcher(obj, 'a.b.c', () => {
//   console.log('two')
// })
