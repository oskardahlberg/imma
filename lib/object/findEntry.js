'use strict'

const findEntry = module.exports = (object, fn) => {
  for (let key in object) {
    const value = object[key]
    if (fn(value, key, object)) return [ key, value ]
  }
}