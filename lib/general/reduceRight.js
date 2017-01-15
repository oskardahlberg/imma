'use strict'

const objectReduceRight = require('../object/reduceRight')

const reduceRight = module.exports = (iterable, fn, initial) =>
  Array.isArray(iterable) ?
    iterable.reduceRight(fn, initial) :
    objectReduceRight(iterable, fn, initial)