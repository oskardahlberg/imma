'use strict'

const arrayFindLastIndex = require('../array/findLastIndex')
const objectFindLastKey = require('../object/findLastKey')

const findLastKey = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    arrayFindLastIndex(iterable, fn) :
    objectFindLastKey(iterable, fn)