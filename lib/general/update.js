'use strict'

const set = require('./set')

const update = module.exports = (iterable, key, fn) =>
  typeof key === 'function' ?
    key(iterable) :
    set(iterable, key, fn(iterable[key]))