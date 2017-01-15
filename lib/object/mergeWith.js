'use strict'

const mergeWith = module.exports = (objects, fn) => {
  const result = {}
  for (let i in objects) {
    const object = objects[i]
    for (let key in object) {
      result[key] = key in result ?
        fn(result[key], object[key], key) :
        object[key]
    }
  }
  return result
}