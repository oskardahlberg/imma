'use strict'

const insert = module.exports = (array, index, value) => {
  const head = array.slice(0, index)
  const tail = array.slice(index)
  head.push(value)
  return head.concat(tail)
}