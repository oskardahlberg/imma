'use strict'

const reduceRight = module.exports = (object, fn, initial) => {
  let result = initial
  const keys = Object.keys(object).reverse()
  for (let key of keys) {
    result = fn(result, object[key], key, object)
  }
  return result
}