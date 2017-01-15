'use strict'

const filter = module.exports = (object, fn) => {
  const result = {}
  for (let key in object) {
    if (fn(object[key], key, object)) result[key] = object[key]
  }
  return result
}