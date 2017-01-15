'use strict'

const arraySet = require('../array/set')
const objectSet = require('../object/set')

const set = module.exports = (iterable, key, value) =>
  Array.isArray(iterable) ?
    arraySet(iterable, key, value) :
    objectSet(iterable, key, value)