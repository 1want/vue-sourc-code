import observe from './observe'
import Watcher from './Watcher'

let obj = {
  a: 1,
  b: {
    c: {
      d: 4
    }
  },
  f: 2,
  e: [22, 33, 44, 55]
}

observe(obj)

// new Watcher(obj, 'b.c.d', val => {
//   console.log('watcher监听', val)
// })

new Watcher(obj, 'f', val => {
  console.log('watcher监听', val, 'val1')
})
console.log(obj)
new Watcher(obj, 'a', val => {
  console.log('watcher监听', val, 'val2')
})

obj.a = 22

// obj.f = 10
