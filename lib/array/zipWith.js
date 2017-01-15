'use strict'

const zipWith = module.exports = (a, b, fn) =>
  a.map((value, index) => fn(value, b[index]))