'use strict'

const mergeDeepWith = require('./mergeDeepWith')

const getNext = (prev, next) => next

const mergeDeep = module.exports = (...iterables) =>
  mergeDeepWith(getNext, ...iterables)