'use strict'

const objectFilter = require('../object/filter')

const filter = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    iterable.filter(fn) :
    objectFilter(iterable, fn)