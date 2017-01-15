'use strict'

const findEntry = require('./findEntry')

const findKey = module.exports = (object, fn) => {
  const result = findEntry(object, fn)
  return result && result[0]
}