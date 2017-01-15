'use strict'

const objectMap = require('../object/map')

const map = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    iterable.map(fn) :
    objectMap(iterable, fn)