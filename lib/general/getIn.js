'use strict'

const getIn = module.exports = (iterable, keys) => {
  const first = keys[0]
  if (!iterable || !iterable[first]) return
  if (keys.length === 1) return iterable[first]
  return getIn(iterable[first], keys.slice(1))
}