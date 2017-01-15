'use strict'

const mapEntries = module.exports = (object, fn) => {
  const result = {}
  let index = 0
  for (let key in object) {
    const entry = [ key, object[key] ]
    const [ newKey, newValue ] = fn(entry, index, object)
    result[newKey] = newValue
    index++
  }
  return result
}