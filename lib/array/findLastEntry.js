'use strict'

const findLastEntry = module.exports = (array, fn) => {
  for (let index = array.length - 1; index >= 0; index--) {
    // Skip sparse entries
    if (!(index in array)) continue
    const value = array[index]
    if (fn(value, index, array)) return [ index, value ]
  }
}