const path = require('path')

const getData = require('../utils/getData')

module.exports = {
  input: getData(path.join(__dirname, 'input.txt'))
    .filter(l => l),
  testInput: getData(path.join(__dirname, 'testInput.txt'))
    .filter(l => l)
}
