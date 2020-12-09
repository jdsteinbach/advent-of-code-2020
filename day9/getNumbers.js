const getData = require('../utils/getData')

module.exports = getData('day9/numbers.txt').map(n => parseInt(n, 10))
