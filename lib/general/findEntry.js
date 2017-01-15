'use strict'

const arrayFindEntry = require('../array/findEntry')
const objectFindEntry = require('../object/findEntry')

const findEntry = module.exports = (iterable, fn) =>
  Array.isArray(iterable) ?
    arrayFindEntry(iterable, fn) :
    objectFindEntry(iterable, fn)