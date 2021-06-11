import { def } from './utils'

const arrayMethod = Object.create(Array.prototype)

// export const methods = ['pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']
export const methods = []

methods.forEach(item => {
  const original = arrayMethod[item]
  def(
    arrayMethod,
    item,
    function () {
      original.apply(this, arguments)
    },
    false
  )
})
