const format = value => {
  value = Math.round(value)
  return (value === -0)
    ? 0
    : value
}

const rotateWaypoint = (waypoint, instruction) => {
  const { x, y } = waypoint
  let { action, value } = instruction
  value = (action === 'L')
    ? value * -1
    : value
  const radians = (Math.PI / 180) * value
  const cos = Math.cos(radians)
  const sin = Math.sin(radians)
  const nx = format((cos * x) + (sin * y))
  const ny = format((cos * y) - (sin * x))

  return {
    x: nx,
    y: ny
  }
}

module.exports = rotateWaypoint
