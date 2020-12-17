const path = require('path')

const getData = require('../utils/getData')

module.exports = getData(path.join(__dirname, 'input.txt'))
  .map(l => l.split(',').map(v => parseInt(v, 10)))
  .filter(l => l)[0]
