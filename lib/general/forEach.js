'use strict'

const objectForEach = require('../object/forEach')

const forEach = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    iterable.forEach(fn) :
    objectForEach(iterable, fn)