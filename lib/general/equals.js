'use strict'

const equalsWith = require('./equalsWith')

const predicate = (a, b) => a === b

const equals = module.exports = (a, b) =>
  equalsWith(a, b, predicate)