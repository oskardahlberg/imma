'use strict'

const map = require('./map')

const zipWith = module.exports = (a, b, fn) =>
  map(a, (value, key) => fn(value, b[key]))