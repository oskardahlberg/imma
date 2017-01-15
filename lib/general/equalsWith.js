'use strict'

const arrayEqualsWith = require('../array/equalsWith')
const objectEqualsWith = require('../object/equalsWith')

const equalsWith = module.exports = (a, b, fn) => {
  if (a === b) return true
  if (!a || !b) return false

  const isArray = Array.isArray(a)
  if (isArray !== Array.isArray(b)) return false

  return isArray ?
    arrayEqualsWith(a, b, fn) :
    objectEqualsWith(a, b, fn)
}