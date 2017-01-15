'use strict'

const some = require('./some')

const createPredicate = fn => value => !fn(value)

const every = module.exports = (iterable, fn) =>
  !some(iterable, createPredicate(fn))