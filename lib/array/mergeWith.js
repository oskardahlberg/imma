'use strict'

const mergeWith = module.exports = (arrays, fn) => {
  const result = []
  for (let array of arrays) {
    for (let index in array) {
      result[index] = index in result ?
        fn(result[index], array[index], index) :
        array[index]
    }
  }
  return result
}