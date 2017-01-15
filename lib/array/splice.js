'use strict'

const splice = module.exports = (array, index, removeNum, ...values) => {
  const head = array.slice(0, index)
  const tail = array.slice(index + removeNum)
  return head.concat(values, tail)
}