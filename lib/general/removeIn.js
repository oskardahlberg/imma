'use strict'

const set = require('./set')
const remove = require('./remove')

const removeIn = module.exports = (iterable, keys) => {
  const first = keys[0]
  if (!iterable || !(first in iterable)) return iterable
  if (keys.length === 1) return remove(iterable, first)
  return set(iterable, first, removeIn(iterable[first], keys.slice(1)))
}