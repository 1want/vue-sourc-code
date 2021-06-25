import observe from './observe'
import Watcher from './Watcher'

let obj = {
  a: 1,
  b: {
    c: {
      d: 4
    }
  },
  e: [22, 33, 44, 55]
}

observe(obj)

// new Watcher(obj, 'b.c.d', val => {
//   console.log('watcher监听', val)
// })

new Watcher(obj, 'a', val => {
  console.log('watcher监听', val)
})

obj.a = 22
// new Watcher(obj, "b.c.d", (val) => {
//   console.log("watcher监听", val);
// });
