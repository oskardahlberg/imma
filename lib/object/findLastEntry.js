'use strict'

const findLastEntry = module.exports = (object, fn) => {
  const keys = Object.keys(object).reverse()
  for (let i in keys) {
    const key = keys[i]
    const value = object[key]
    if (fn(value, key, object)) return [ key, value ]
  }
}