import { def } from './utils'

const arrayMethods = Object.create(Array.prototype)

export const methods = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methods.forEach(item => {
  const original = arrayMethods[item]
  def(
    arrayMethods,
    item,
    function () {
      original.apply(this, arguments)
    },
    false
  )
})
