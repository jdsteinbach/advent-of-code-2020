const followWaypointInstructions = require('./followWaypointInstructions')

const start00 = {
  direction: 'E',
  x: 0,
  y: 0
}
const start428 = {
  direction: 'W',
  x: 4,
  y: 28
}
const moveValues = (action, value) => ({
  action,
  value
})

test.each([
  ['N', 3, {x: 123, y: 38}, {x: 0, y: 0}, {x: 0, y: 3}],
  ['E', 3, {x: 123, y: 38}, {x: 0, y: 0}, {x: 3, y: 0}],
  ['S', 3, {x: 123, y: 38}, {x: 0, y: 0}, {x: 0, y: -3}],
  ['W', 3, {x: 123, y: 38}, {x: 0, y: 0}, {x: -3, y: 0}],

  ['N', 3, {x: 123, y: 38}, {x: 4, y: 28}, {x: 4, y: 31}],
  ['E', 3, {x: 123, y: 38}, {x: 4, y: 28}, {x: 7, y: 28}],
  ['S', 3, {x: 123, y: 38}, {x: 4, y: 28}, {x: 4, y: 25}],
  ['W', 3, {x: 123, y: 38}, {x: 4, y: 28}, {x: 1, y: 28}],
])('followWaypointInstructions: move %s %i from %o', (action, value, shipPosition, waypointPosition, expected) => {
  expect(
    followWaypointInstructions(
      moveValues(action, value),
      shipPosition,
      waypointPosition
    ).waypointPosition).toStrictEqual(expected)

  expect(
    followWaypointInstructions(
      moveValues(action, value),
      shipPosition,
      waypointPosition,
    ).shipPosition).toStrictEqual(shipPosition)
})

test.each([
  ['R', 90, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],
  ['R', 180, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],
  ['R', 270, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],
  ['R', 360, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],

  ['R', 90, {x: 182, y: 392}, {x: 4, y: 28}, {x: 28, y: -4}],
  ['R', 180, {x: 182, y: 392}, {x: 4, y: 28}, {x: -4, y: -28}],
  ['R', 270, {x: 182, y: 392}, {x: 4, y: 28}, {x: -28, y: 4}],
  ['R', 360, {x: 182, y: 392}, {x: 4, y: 28}, {x: 4, y: 28}],

  ['L', 90, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],
  ['L', 180, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],
  ['L', 270, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],
  ['L', 360, {x: 812, y: 12}, {x: 0, y: 0}, {x: 0, y: 0}],

  ['L', 90, {x: 182, y: 392}, {x: 4, y: 28}, {x: -28, y: 4}],
  ['L', 180, {x: 182, y: 392}, {x: 4, y: 28}, {x: -4, y: -28}],
  ['L', 270, {x: 182, y: 392}, {x: 4, y: 28}, {x: 28, y: -4}],
  ['L', 360, {x: 182, y: 392}, {x: 4, y: 28}, {x: 4, y: 28}],
])('followWaypointInstructions: rotate %s %i from %i, %i', (action, value, shipPosition, waypointPosition, expected) => {
  expect(
    followWaypointInstructions(
      moveValues(action, value),
      shipPosition,
      waypointPosition
    ).waypointPosition).toStrictEqual(expected)

  expect(
    followWaypointInstructions(
      moveValues(action, value),
      shipPosition,
      waypointPosition,
    ).shipPosition).toStrictEqual(shipPosition)
})

test.each([
  ['F', 1, {x: 0, y: 0}, {x: 5, y: 8}, {x: 5, y: 8}],
  ['F', 2, {x: 0, y: 0}, {x: 5, y: 8}, {x: 10, y: 16}],
  ['F', 3, {x: 0, y: 0}, {x: 5, y: 8}, {x: 15, y: 24}],
  ['F', 4, {x: 0, y: 0}, {x: 5, y: 8}, {x: 20, y: 32}],

  ['F', 1, {x: 4, y: 28}, {x: 5, y: 8}, {x: 9, y: 36}],
  ['F', 2, {x: 4, y: 28}, {x: 5, y: 8}, {x: 14, y: 44}],
  ['F', 3, {x: 4, y: 28}, {x: 5, y: 8}, {x: 19, y: 52}],
  ['F', 4, {x: 4, y: 28}, {x: 5, y: 8}, {x: 24, y: 60}],

  ['F', 1, {x: -34, y: 180}, {x: 5, y: -8}, {x: -29, y: 172}],
  ['F', 2, {x: -34, y: 180}, {x: 5, y: -8}, {x: -24, y: 164}],
  ['F', 3, {x: -34, y: 180}, {x: 5, y: -8}, {x: -19, y: 156}],
  ['F', 4, {x: -34, y: 180}, {x: 5, y: -8}, {x: -14, y: 148}],

  ['F', 1, {x: -34, y: 180}, {x: -5, y: 8}, {x: -39, y: 188}],
  ['F', 2, {x: -34, y: 180}, {x: -5, y: 8}, {x: -44, y: 196}],
  ['F', 3, {x: -34, y: 180}, {x: -5, y: 8}, {x: -49, y: 204}],
  ['F', 4, {x: -34, y: 180}, {x: -5, y: 8}, {x: -54, y: 212}],

  ['F', 1, {x: -34, y: 180}, {x: -5, y: -8}, {x: -39, y: 172}],
  ['F', 2, {x: -34, y: 180}, {x: -5, y: -8}, {x: -44, y: 164}],
  ['F', 3, {x: -34, y: 180}, {x: -5, y: -8}, {x: -49, y: 156}],
  ['F', 4, {x: -34, y: 180}, {x: -5, y: -8}, {x: -54, y: 148}],
])('followWaypointInstructions: moveShip %s %i from %o toward waypoint %o,', (action, value, shipPosition, waypointPosition, expected) => {
  expect(
    followWaypointInstructions(
      moveValues(action, value),
      shipPosition,
      waypointPosition,
    ).shipPosition).toStrictEqual(expected)

  expect(
    followWaypointInstructions(
      moveValues(action, value),
      shipPosition,
      waypointPosition,
    ).waypointPosition).toStrictEqual(waypointPosition)
})
