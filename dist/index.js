
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hamster-test-swap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./hamster-test-swap-sdk.cjs.development.js')
}
