const fs = require('fs')

module.exports = JSON.parse(fs.readFileSync('./lib/eslintrc.json'))
