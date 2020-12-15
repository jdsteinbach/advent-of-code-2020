const move = (instructions, coordinates) => {
  instructions = Array.isArray(instructions)
    ? instructions
    : [instructions]

  let { x, y } = coordinates
  let newX = x
  let newY = y
  instructions.forEach(d => {
    const { action, value } = d

    switch (action) {
      case 'N':
        newY += value
        break
      case 'E':
        newX += value
        break
      case 'S':
        newY -= value
        break
      case 'W':
        newX -= value
        break
      default:
        break
    }
  })

  return {
    x: newX || x,
    y: newY || y
  }
}

module.exports = move
