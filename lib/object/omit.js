'use strict'

const omit = module.exports = (object, keys) => {
  const result = Object.assign({}, object)
  for (let i in keys) delete result[keys[i]]
  return result
}