const getData = require('../utils/getData')

const normalizeData = data => {
  data.push('0')
  return data
    .map(n => parseInt(n, 10))
    .sort((a, b) => a - b)
}

module.exports = {
  joltage: normalizeData(getData('day10/joltage.txt')),
  testJoltage1: normalizeData(getData('day10/testJoltage1.txt')),
  testJoltage2: normalizeData(getData('day10/testJoltage2.txt'))
}
