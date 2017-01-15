'use strict'

const objectSome = require('../object/some')

const createPredicate = value => other => other === value

const includes = module.exports = (iterable, value) =>
  Array.isArray(iterable) ?
    iterable.includes(value) :
    objectSome(object, createPredicate(value))