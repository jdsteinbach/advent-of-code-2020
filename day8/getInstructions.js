const getData = require('../utils/getData')

module.exports = getData('day8/instructions.txt')
  .map(i => {
    const [ operation, argument ] = i.split(' ')
    return {
      operation,
      argument
    }
  })
