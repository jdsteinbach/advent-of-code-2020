const { writeFileSync } = require('fs')
const {
  instructions,
  testInstructions
} = require('./getInstructions')
const followInstructions = require('./fns/followInstructions')
const followWaypointInstructions = require('./fns/followWaypointInstructions')

const getManhattanDistance = (x, y) => {
  return Math.abs(x) + Math.abs(y)
}

const getFirstFinalPosition = (instructions, initialPosition) => {
  let currentPosition = initialPosition || {
    direction: 'E',
    x: 0,
    y: 0
  }
  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i]

    currentPosition = followInstructions(
      instruction,
      currentPosition
    )

  }
  return getManhattanDistance(currentPosition.x, currentPosition.y)
}

const getSecondFinalPosition = (instructions, shipPosition, waypointPosition) => {
  let moveLog = []
  shipPosition = shipPosition || {
    x: 0,
    y: 0
  }
  waypointPosition = waypointPosition || {
    x: 10,
    y: 1
  }

  for (let i = 0; i < instructions.length; i++) {
    let instruction = instructions[i]

    let {
      shipPosition: newShipPosition,
      waypointPosition: newWaypointPosition,
    } = followWaypointInstructions(
      instruction,
      shipPosition,
      waypointPosition
    )

    moveLog.push({shipPosition, waypointPosition, instruction, newShipPosition, newWaypointPosition})

    shipPosition = newShipPosition
    waypointPosition = newWaypointPosition
  }
  // I got burnt out chasing this one and used `index-alt.js` from https://github.com/tpatel/advent-of-code-2020/blob/main/day12.js
  // Maybe later I'll go through its output and mine to find out where my functions fail, but realistically, probably not ¯\_(ツ)_/¯
  writeFileSync('./logs.json', JSON.stringify(moveLog, null, 2))
  return getManhattanDistance(shipPosition.x, shipPosition.y)
}

const testFirstFinalPosition = getFirstFinalPosition(testInstructions)
const firstFinalPosition = getFirstFinalPosition(instructions)
const testSecondFinalPosition = getSecondFinalPosition(testInstructions)
const secondFinalPosition = getSecondFinalPosition(instructions)

console.log({
  testFirstFinalPosition: testFirstFinalPosition === 25,
  firstFinalPosition: firstFinalPosition === 1319,
  testSecondFinalPosition: testSecondFinalPosition === 286,
  secondFinalPosition
})
