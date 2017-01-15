'use strict'

const pick = module.exports = (object, keys) => {
  const result = {}
  for (let key of keys) result[key] = object[key]
  return result
}