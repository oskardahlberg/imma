'use strict'

const arrayZipWith = require('../array/zipWith')
const objectZipWith = require('../object/zipWith')

const zipWith = module.exports = (a, b, fn) =>
  Array.isArray(a) ?
    arrayZipWith(a, b, fn) :
    objectZipWith(a, b, fn)