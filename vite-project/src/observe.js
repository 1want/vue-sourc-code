import Observer from './Observes'

let ob

function observe(obj) {
  if (typeof obj != 'object') return

  if (obj.hasOwnProperty('__ob__')) {
    ob = obj.__ob__
  } else {
    ob = new Observer(obj)
  }
  return ob
}

export default observe
