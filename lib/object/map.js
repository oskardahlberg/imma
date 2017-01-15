'use strict'

const map = module.exports = (object, fn) => {
  const result = {}
  for (let key in object) {
    result[key] = fn(object[key], key, object)
  }
  return result
}