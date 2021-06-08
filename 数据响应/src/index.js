import observe from './observe'

const obj = {
  a: {
    b: {
      c: 222222
    }
  },
  f: 333,
  g: [1, 2, 3]
}

observe(obj)

obj.g.push(11)

console.log(obj.g)
