const rotateWaypoint = require('./rotateWaypoint')

test('rotateWaypoint, right rotations from 0,0', () => {
  const waypointPosition = {
    x: 0,
    y: 0
  }
  const turns = degrees => ({
    action: 'R',
    value: degrees
  })

  expect(rotateWaypoint(
    waypointPosition,
    turns(90)
  )).toStrictEqual({x: 0, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(180)
  )).toStrictEqual({x: 0, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(270)
  )).toStrictEqual({x: 0, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(360)
  )).toStrictEqual({x: 0, y: 0})
})

test('rotateWaypoint, right rotations from 0,10', () => {
  const waypointPosition = {
    x: 0,
    y: 10
  }
  const turns = degrees => ({
    action: 'R',
    value: degrees
  })

  expect(rotateWaypoint(
    waypointPosition,
    turns(90)
  )).toStrictEqual({x: 10, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(180)
  )).toStrictEqual({x: 0, y: -10})

  expect(rotateWaypoint(
    waypointPosition,
    turns(270)
  )).toStrictEqual({x: -10, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(360)
  )).toStrictEqual({x: 0, y: 10})
})

test('rotateWaypoint, right rotations from 2,8', () => {
  const waypointPosition = {
    x: 2,
    y: 8
  }
  const turns = degrees => ({
    action: 'R',
    value: degrees
  })

  expect(rotateWaypoint(
    waypointPosition,
    turns(90)
  )).toStrictEqual({x: 8, y: -2})

  expect(rotateWaypoint(
    waypointPosition,
    turns(180)
  )).toStrictEqual({x: -2, y: -8})

  expect(rotateWaypoint(
    waypointPosition,
    turns(270)
  )).toStrictEqual({x: -8, y: 2})

  expect(rotateWaypoint(
    waypointPosition,
    turns(360)
  )).toStrictEqual({x: 2, y: 8})
})

test('rotateWaypoint, left rotations from 0,0', () => {
  const waypointPosition = {
    x: 0,
    y: 0
  }
  const turns = degrees => ({
    action: 'L',
    value: degrees
  })

  expect(rotateWaypoint(
    waypointPosition,
    turns(90)
  )).toStrictEqual({x: 0, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(180)
  )).toStrictEqual({x: 0, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(270)
  )).toStrictEqual({x: 0, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(360)
  )).toStrictEqual({x: 0, y: 0})
})

test('rotateWaypoint, left rotations from 0,10', () => {
  const waypointPosition = {
    x: 0,
    y: 10
  }
  const turns = degrees => ({
    action: 'L',
    value: degrees
  })

  expect(rotateWaypoint(
    waypointPosition,
    turns(90)
  )).toStrictEqual({x: -10, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(180)
  )).toStrictEqual({x: 0, y: -10})

  expect(rotateWaypoint(
    waypointPosition,
    turns(270)
  )).toStrictEqual({x: 10, y: 0})

  expect(rotateWaypoint(
    waypointPosition,
    turns(360)
  )).toStrictEqual({x: 0, y: 10})
})

test('rotateWaypoint, left rotations from 2,8', () => {
  const waypointPosition = {
    x: 2,
    y: 8
  }
  const turns = degrees => ({
    action: 'L',
    value: degrees
  })

  expect(rotateWaypoint(
    waypointPosition,
    turns(90)
  )).toStrictEqual({x: -8, y: 2})

  expect(rotateWaypoint(
    waypointPosition,
    turns(180)
  )).toStrictEqual({x: -2, y: -8})

  expect(rotateWaypoint(
    waypointPosition,
    turns(270)
  )).toStrictEqual({x: 8, y: -2})

  expect(rotateWaypoint(
    waypointPosition,
    turns(360)
  )).toStrictEqual({x: 2, y: 8})
})
