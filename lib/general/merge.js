'use strict'

const arrayMerge = require('../array/merge')
const objectMerge = require('../object/merge')

const merge = module.exports = (...iterables) =>
  Array.isArray(iterables[0]) ?
    arrayMerge(iterables) :
    objectMerge(iterables)