'use strict'

const mapKeys = module.exports = (object, fn) => {
  const result = {}
  for (let key in object) {
    result[fn(key, object[key], object)] = object[key]
  }
  return result
}