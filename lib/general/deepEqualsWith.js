'use strict'

const equalsWith = require('./equalsWith')

const createPredicate = fn => {
  const predicate = (a, b) => {
    if (a === b) return true

    const aType = typeof a
    const bType = typeof b
    if (aType !== bType || aType !== 'object') return fn(a, b)

    return equalsWith(a, b, predicate)
  }
  return predicate
}

const deepEqualsWith = module.exports = (a, b, fn) =>
  equalsWith(a, b, createPredicate(fn))