const getData = require('../utils/getData')

module.exports = {
  seats: getData('day11/seats.txt').map(row => row.split('')),
  testOrig: getData('day11/test-orig.txt').map(row => row.split('')),
  testOne: getData('day11/test-one.txt').map(row => row.split('')),
  testOne2: getData('day11/test-one2.txt').map(row => row.split('')),
  testTwo: getData('day11/test-two.txt').map(row => row.split('')),
  testTwo2: getData('day11/test-two2.txt').map(row => row.split('')),
  testFinal: getData('day11/test-final.txt').map(row => row.split('')),
  testFinal2: getData('day11/test-final2.txt').map(row => row.split('')),
}
