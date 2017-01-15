'use strict'

const findLastEntry = require('./findEntry')

const findLast = module.exports = (object, fn) => {
  const result = findLastEntry(object, fn)
  return result && result[1]
}