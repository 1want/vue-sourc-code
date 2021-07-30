import { def } from './utils'

export const arrayMethod = Object.create(Array.prototype)

const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

methods.forEach(method => {
  const original = arrayMethod[method]
  def(arrayMethod, method, function (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) ob.observeArray(inserted)
    ob.dep.notify()
    return result
  })
})
