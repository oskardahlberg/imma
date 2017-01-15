'use strict'

const unshift = module.exports = (array, head, ...tail) => {
  const result = array.slice(0)
  result.unshift(head)
  if (tail.length > 0) result.unshift(...tail)
  return result
}