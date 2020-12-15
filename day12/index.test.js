const getData = require('../utils/getData')
const followWaypointInstructions = require('./fns/followWaypointInstructions')

const logs = JSON.parse(getData('./logs.json')).map(l => {
  return [
    l.instruction,
    l.shipPosition,
    l.waypointPosition,
    l.newShipPosition,
    l.newWaypointPosition,
  ]
})

test.each(logs)('%o, ship %o, waypoint %o', (instruction, shipPosition, waypointPosition, newShipPosition, newWaypointPosition) => {
  if ('NESWLR'.split('').indexOf(instruction.action) > -1) {
    expect(
      followWaypointInstructions(
        instruction,
        shipPosition,
        waypointPosition,
      ).waypointPosition).toStrictEqual(newWaypointPosition)

    expect(
      followWaypointInstructions(
        instruction,
        shipPosition,
        waypointPosition,
      ).shipPosition).toStrictEqual(shipPosition)
  }

  if ('F' === instruction.action) {
    expect(
      followWaypointInstructions(
        instruction,
        shipPosition,
        waypointPosition,
      ).shipPosition).toStrictEqual(newShipPosition)

    expect(
      followWaypointInstructions(
        instruction,
        shipPosition,
        waypointPosition,
      ).waypointPosition).toStrictEqual(waypointPosition)
  }
})
