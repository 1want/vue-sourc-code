export function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    value,
    writeable: true,
    configurable: true,
    enumerable: false
  })
}
