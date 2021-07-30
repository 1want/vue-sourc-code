import observe from './observe'
import Watcher from './Watcher'

const obj = {
  // a: {
  //   b: 2
  // }
  arr: [1, 2, 3]
}

observe(obj)

new Watcher(obj, 'arr', (newV, oldV) => {
  console.log(newV, oldV)
})

obj.arr.push(1)

// obj.a

// new Watcher(obj, 'arr', (newV, oldV) => {
//   console.log(newV, oldV)
// })

// console.log(obj.arr)
