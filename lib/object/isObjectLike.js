'use strict'

const isObjectLike = module.exports = object =>
  typeof object === 'object' &&
  object.constructor === Object &&
  Object.getPrototypeOf(object) === Object.prototype