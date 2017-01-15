'use strict'

const set = require('./set')

const setIn = module.exports = (iterable, keys, value) => set(
  iterable,
  keys[0],
  keys.length === 1 ?
    value :
    setIn(iterable[keys[0]] || {}, keys.slice(1), value)
)