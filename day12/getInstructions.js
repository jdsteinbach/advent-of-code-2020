const getData = require('../utils/getData')

const normalizeData = data => data.map(d => {
  const [raw, action, value] = d.match(/^([NSEWLRF])(\d+)$/i)
  return {
    action,
    value: parseInt(value, 10)
  }
})

module.exports = {
  instructions: normalizeData(getData('day12/instructions.txt')),
  testInstructions: normalizeData(getData('day12/testInstructions.txt'))
}
