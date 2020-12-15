const mod = require('./mod')

const changeDirection = (instruction, initialDirection) =>
{
  const directions = ['N', 'E', 'S', 'W']

  let { action, value } = instruction
  value = action === 'L'
    ? value * -1
    : value
  const turnValue = value / 90

  const dIndex = directions.indexOf(initialDirection)
  const newDIndex = mod((dIndex + turnValue), directions.length)

  return directions[newDIndex]
}

module.exports = changeDirection
