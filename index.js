'use strict'

const array = require('./lib/array')
const object = require('./lib/object')
const general = require('./lib/general')

const arrayFns = object.pick(array, [
  'insert', 'pop', 'push', 'shift', 'unshift', 'splice', 'findLastIndex'
])

const objectFns = object.pick(object, [
  'isObjectLike', 'mapEntries', 'mapKeys', 'omit', 'pick'
])

const imma = module.exports =
  Object.assign({}, general, arrayFns, objectFns)