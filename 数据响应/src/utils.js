export const def = (data, key, value, enumerable) => {
  Object.defineProperty(data, key, {
    value,
    enumerable,
    write: true,
    configurable: true
  })
}
