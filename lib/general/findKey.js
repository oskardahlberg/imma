'use strict'

const objectFindKey = require('../object/findKey')

const findKey = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    iterable.findIndex(fn) :
    objectFindKey(iterable, fn)