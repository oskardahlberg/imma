'use strict'

const reduceRight = module.exports = (object, fn, initial) => {
  let result = initial
  const keys = Object.keys(object).reverse()
  for (let i in keys) {
    result = fn(result, object[keys[i]], keys[i], object)
  }
  return result
}