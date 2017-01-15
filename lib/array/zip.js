'use strict'

const zipWith = require('./zipWith')

const combine = (a, b) => [ a, b ]

const zip = module.exports = (a, b) => zipWith(a, b, combine)