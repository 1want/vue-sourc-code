export function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    value: value,
    writeable: false,
    configurable: false,
    enumerable: false
  })
}
