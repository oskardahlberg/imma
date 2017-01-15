'use strict'

const equalsWith = module.exports = (a, b, fn) => {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) return false
  for (let key in a) {
    if (!(key in b)) return false
    if (!fn(a[key], b[key])) return false
  }
  return true
}