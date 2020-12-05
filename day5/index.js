const boardingPasses = require('./getBoardingPasses')

const rows = Array.from(Array(128).keys())
const seats = Array.from(Array(8).keys())

const parseLocation = (locationStrings, locations) => {
  let parsedLocationStrings = typeof(locationStrings) === 'string'
    ? locationStrings.split('')
    : locationStrings

  const [locationString, ...newLocationStrings] = parsedLocationStrings

  const newLocations = (['f', 'l'].indexOf(locationString.toLowerCase()) > -1)
    ? locations.slice(0, (locations.length / 2))
    : locations.slice((locations.length / 2))

  return newLocations.length === 1
    ? newLocations[0]
    : parseLocation(newLocationStrings, newLocations)
}

const getSeatId = pass => {
  const { row, seat } = parsePass(pass)
  return (row * 8) + seat
}

const parsePass = pass => {
  const [total, row, seat] = pass.match(/([fb]{7})([rl]{3})/i)

  return {
    row: parseLocation(row, rows),
    seat: parseLocation(seat, seats),
  }
}

const getAllSeatIds = passes => passes.map(p => getSeatId(p))

const getHighestSeatId = passes => getAllSeatIds(passes)
  .sort((a, b) => {
    return a - b
  })
  .pop()

const getLowestSeatId = passes => getAllSeatIds(passes)
  .sort((a, b) => {
    return a - b
  })
  .shift()

const getMySeatId = passes => {
  const highest = getHighestSeatId(passes)
  const lowest = getLowestSeatId(passes)

  const allSeatIds = getAllSeatIds(passes)

  const missingNeighbors = [...allSeatIds]
    .filter(p => {
      return (!allSeatIds.find(id => id === (p + 1)) || !allSeatIds.find(id => id === (p - 1))) && (p !== lowest && p !== highest)
    })

  return missingNeighbors.reduce((acc, id) => acc + id, 0) / missingNeighbors.length
}

console.log({
  highestSeatId: getHighestSeatId(boardingPasses),
  mySeatId: getMySeatId(boardingPasses)
})
