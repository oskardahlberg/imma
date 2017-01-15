'use strict'

const reduce = module.exports = (object, fn, initial) => {
  let result = initial
  for (let key in object) {
    result = fn(result, object[key], key, object)
  }
  return result
}