'use strict'

const forEach = module.exports = (object, fn) => {
  for (let key in object) {
    fn(object[key], key, object)
  }
}