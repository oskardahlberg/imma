'use strict'

const set = module.exports = (object, key, value) => {
  const result = Object.assign({}, object)
  result[key] = value
  return result
}