const rotateWaypoint = require('./rotateWaypoint')
const move = require('./move')

const followWaypointInstructions = (instruction, shipPosition, waypointPosition) => {
  waypointPosition = waypointPosition || {}

  switch (instruction.action) {
    case 'N':
    case 'E':
    case 'S':
    case 'W':
      waypointPosition = move(instruction, waypointPosition)
      break
    case 'F':
      let firstMove = move({action: 'N', value: waypointPosition.y * instruction.value}, shipPosition)

      let secondMove = move({action: 'E', value: waypointPosition.x * instruction.value}, firstMove)

      shipPosition = secondMove
      break
    case 'R':
    case 'L':
      waypointPosition = rotateWaypoint(waypointPosition, instruction)
      break
    default:
      throw new Error(`Unable to handle instruction ${instruction.action}`)
      break
  }

  return {
    shipPosition,
    waypointPosition
  }
}

module.exports = followWaypointInstructions
