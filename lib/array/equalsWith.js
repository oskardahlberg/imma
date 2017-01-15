'use strict'

const equalsWith = module.exports = (a, b, fn) => {
  if (a.length !== b.length) return false
  for (let i in a) {
    if (!fn(a[i], b[i])) return false
  }
  return true
}