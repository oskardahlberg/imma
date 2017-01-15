'use strict'

const setIn = require('./setIn')
const getIn = require('./getIn')

const updateIn = module.exports = (iterable, keys, fn) =>
  setIn(iterable, keys, fn(getIn(iterable, keys)))