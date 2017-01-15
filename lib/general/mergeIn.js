'use strict'

const updateIn = require('./updateIn')
const merge = require('./merge')

const mergeIn = module.exports = (iterable, keys, ...values) =>
  updateIn(iterable, keys, value => merge(value, ...values))