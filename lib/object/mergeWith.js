'use strict'

const mergeWith = module.exports = (objects, fn) => {
  const result = {}
  for (let object of objects) {
    for (let key in object) {
      result[key] = key in result ?
        fn(result[key], object[key], key) :
        object[key]
    }
  }
  return result
}