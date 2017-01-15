'use strict'

const arrayMergeWith = require('../array/mergeWith')
const objectMergeWith = require('../object/mergeWith')

const mergeWith = module.exports = (fn, ...iterables) =>
  Array.isArray(iterables[0]) ?
    arrayMergeWith(iterables, fn) :
    objectMergeWith(iterables, fn)