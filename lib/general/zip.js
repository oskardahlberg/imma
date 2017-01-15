'use strict'

const arrayZip = require('../array/zip')
const objectZip = require('../object/zip')

const zip = module.exports = (a, b) =>
  Array.isArray(a) ?
    arrayZip(a, b) :
    objectZip(a, b)