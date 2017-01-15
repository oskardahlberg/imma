'use strict'

const objectSize = require('../object/size')

const size = module.exports = iterable =>
  Array.isArray(iterable) ?
    iterable.length :
    objectSize(iterable)