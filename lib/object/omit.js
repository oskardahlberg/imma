'use strict'

const omit = module.exports = (object, keys) => {
  const result = Object.assign({}, object)
  for (let key of keys) delete result[key]
  return result
}