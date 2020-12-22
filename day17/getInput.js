const path = require('path')

const getData = require('../utils/getData')

const normalize = data => data
  .map(l => l.split(''))
  .filter(l => l)

module.exports = {
  input: normalize(getData(path.join(__dirname, 'input.txt'))),
  testInput:  normalize(getData(path.join(__dirname, 'testInput.txt')))
}
