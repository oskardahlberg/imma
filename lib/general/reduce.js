'use strict'

const objectReduce = require('../object/reduce')

const reduce = module.exports = (iterable, fn, initial) =>
  Array.isArray(iterable) ?
    iterable.reduce(fn, initial) :
    objectReduce(iterable, fn, initial)