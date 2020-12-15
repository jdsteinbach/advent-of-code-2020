const changeDirection = require('./changeDirection')
const move = require('./move')

const followInstructions = (instruction, initialPosition) => {
  const { action, value } = instruction
  let {
    direction = 'E',
    x = 0,
    y = 0
  } = initialPosition
  let newPos = {}

  switch (action) {
    case 'N':
    case 'E':
    case 'S':
    case 'W':
      newPos = move({action, value}, { x, y })
      x = newPos.x
      y = newPos.y
      break
    case 'F':
      newPos = move({action: direction, value}, { x, y })
      x = newPos.x
      y = newPos.y
      break
    default:
      direction = changeDirection({ action, value }, direction)
      break
  }

  return {
    direction,
    x,
    y
  }
}

module.exports = followInstructions
