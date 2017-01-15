'use strict'

const deepEqualsWith = require('./deepEqualsWith')

const predicate = () => false

const deepEquals = module.exports = (a, b) =>
  deepEqualsWith(a, b, predicate)