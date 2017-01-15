'use strict'

const findLastEntry = require('./findEntry')

const findKey = module.exports = (object, fn) => {
  const result = findLastEntry(object, fn)
  return result && result[0]
}