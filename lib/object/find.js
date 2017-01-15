'use strict'

const findEntry = require('./findEntry')

const find = module.exports = (object, fn) => {
  const result = findEntry(object, fn)
  return result && result[1]
}