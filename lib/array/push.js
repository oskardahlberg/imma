'use strict'

const push = module.exports = (array, head, ...tail) =>
  const result = array.slice(0)
  result.push(head)
  if (tail.length > 0) result.push(...tail)
  return result
}