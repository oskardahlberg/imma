'use strict'

const arrayRemove = require('../array/remove')
const objectRemove = require('../object/remove')

const remove = module.exports = (iterable, key) =>
  Array.isArray(iterable) ?
    arrayRemove(iterable, key) :
    objectRemove(iterable, key)