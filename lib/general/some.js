'use strict'

const objectSome = require('../object/some')

const some = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    iterable.some(fn) :
    objectSome(iterable, fn)