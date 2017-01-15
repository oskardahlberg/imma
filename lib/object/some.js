'use strict'

const some = module.exports = (object, fn) => {
  for (let key in object) {
    if (fn(object[key], key, object)) return true
  }
  return false
}