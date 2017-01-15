'use strict'

const findKey = require('./findKey')

const keyOf = module.exports = (iterable, value) =>
  findKey(iterable, other => value === other)