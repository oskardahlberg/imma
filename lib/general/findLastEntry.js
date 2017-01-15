'use strict'

const arrayFindLastEntry = require('../array/findLastEntry')
const objectFindLastEntry = require('../object/findLastEntry')

const findLastEntry = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    arrayFindLastEntry(iterable, fn) :
    objectFindLastEntry(iterable, fn)