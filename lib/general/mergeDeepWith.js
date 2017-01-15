'use strict'

const isObjectLike = require('../object/isObjectLike')

const arrayMergeWith = require('../array/mergeWith')
const objectMergeWith = require('../object/mergeWith')

const createMerger = fn => {
  const merger = (prev, next) => {
    const prevIsObject = isObjectLike(prev)
    const prevIsArray = Array.isArray(prev)
    const nextIsObject = isObjectLike(next)
    const nextIsArray = Array.isArray(next)

    if (!prevIsObject && !prevIsArray &&
        !nextIsObject && !nextIsArray) return fn(prev, next)

    if (!prevIsObject && !prevIsArray ||
        !nextIsObject && !nextIsArray) return next

    return prevIsObject ?
      objectMergeWith([ prev, next ], merger) :
      arrayMergeWith([ prev, next ], merger)
  }
  return merger
}

const mergeDeepWith = module.exports = (fn, ...iterables) =>
  Array.isArray(iterables[0]) ?
    arrayMergeWith(iterables, createMerger(fn)) :
    objectMergeWith(iterables, createMerger(fn))