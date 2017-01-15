'use strict'

const findEntry = module.exports = (array, fn) => {
  for (let i in array) {
    const index = Number(i)
    const value = array[i]
    if (fn(value, index, array)) return [ index, value ]
  }
}