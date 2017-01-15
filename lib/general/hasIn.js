'use strict'

const hasIn = module.exports = (iterable, keys) => {
  const first = keys[0]
  if (!iterable || !(first in iterable)) return false
  if (keys.length === 1) return true
  return hasIn(iterable[first], keys.slice(1))
}