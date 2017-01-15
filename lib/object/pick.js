'use strict'

const pick = module.exports = (object, keys) => {
  const result = {}
  for (let i in keys) result[keys[i]] = object[keys[i]]
  return result
}