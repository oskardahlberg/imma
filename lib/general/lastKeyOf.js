'use strict'

const findLastKey = require('./findLastKey')

const lastKeyOf = module.exports = (iterable, value) =>
  findLastKey(iterable, other => value === other)