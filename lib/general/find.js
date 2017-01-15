'use strict'

const objectFind = require('../object/find')

const find = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    iterable.find(fn) :
    objectFind(iterable, fn)