'use strict'

const set = module.exports = (array, index, value) => {
  const head = array.slice(0, index)
  const tail = array.slice(index + 1)
  head.push(value)
  return head.concat(tail)
}