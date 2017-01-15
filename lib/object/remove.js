'use strict'

const remove = module.exports = (object, key) => {
  const result = Object.assign({}, object)
  delete result[key]
  return result
}