'use strict'

const arrayFindLast = require('../array/findLast')
const objectFindLast = require('../object/findLast')

const findLast = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    arrayFindLast(iterable, fn) :
    objectFindLast(iterable, fn)