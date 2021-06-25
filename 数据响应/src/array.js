import { def } from './utils'

export const arrayMethod = Object.create(Array.prototype)

const methods = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

methods.forEach(item => {
  const original = arrayMethod[item]
  def(
    arrayMethod,
    item,
    function () {
      const ob = this.__ob__
      const args = [...arguments]

      let newEl
      switch (item) {
        case 'push':
        case 'unshift':
          newEl = args
          break
        case 'splice':
          newEl = args.slice(2)
      }

      if (newEl) {
        ob.observeArray(newEl)
      }
      original.apply(this, arguments)
    },
    false
  )
})
