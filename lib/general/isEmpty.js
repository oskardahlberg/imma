'use strict'

const size = require('./size')

const isEmpty = module.exports = iterable =>
  size(iterable) === 0