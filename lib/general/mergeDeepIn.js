'use strict'

const updateIn = require('./updateIn')
const mergeDeep = require('./mergeDeep')

const mergeDeepIn = module.exports = (iterable, keys, ...values) =>
  updateIn(iterable, keys, value => mergeDeep(value, ...values))