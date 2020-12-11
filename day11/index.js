const { seats } = require('./getSeats')

const cloneSeats = seatMap => [...seatMap].map(row => [...row])

const validateSeat = (rowOffset, columnOffset, seat, seatMap) => {
  const newRow = seat.row + rowOffset
  const newColumn = seat.column + columnOffset

  return (seatMap[newRow] && seatMap[newRow][newColumn])
    ? seatMap[newRow][newColumn]
    : false
}

const pushSeat = (rowOffset, columnOffset, seat, seatList, seatMap) => {
  const newRow = seat.row + rowOffset
  const newColumn = seat.column + columnOffset

  if (validateSeat(rowOffset, columnOffset, seat, seatMap)) {
    seatList.push(seatMap[newRow][newColumn])
  }

  return seatList
}

const getAdjacentSeats = (seat, seatMap) => {
  let adjacentSeats = []

  for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
    for(let columnOffset = -1; columnOffset < 2; columnOffset++) {
      if (rowOffset !== 0 || columnOffset !== 0) {
        adjacentSeats = pushSeat(rowOffset, columnOffset, seat, adjacentSeats, seatMap)
      }
    }
  }

  return adjacentSeats
}

const getVisibleSeat = (rowOffset, columnOffset, seat, multiplier, seatMap) => {
  let newRowOffset = rowOffset * multiplier
  let newColumnOffset = columnOffset * multiplier
  const isValid = validateSeat(newRowOffset, newColumnOffset, seat, seatMap)
  if (!isValid) return undefined
  return isValid !== '.'
    ? isValid
    : getVisibleSeat(rowOffset, columnOffset, seat, (multiplier + 1), seatMap)
}

const getVisibleSeats = (seat, seatMap) => {
  let visibleSeats = []

  for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
    for (let columnOffset = -1; columnOffset < 2; columnOffset++) {
      if (rowOffset !== 0 || columnOffset !== 0) {
        visibleSeats.push(getVisibleSeat(rowOffset, columnOffset, seat, 1, seatMap))
      }
    }
  }

  return visibleSeats
}

const getOccupiedSeats = seatList => seatList
  .filter(seat => {
    return seat === '#'
  }).length

const runMoveSequence = (seats, seatFunction, threshold) => {
  seatFunction = seatFunction || getAdjacentSeats
  threshold = threshold || 4
  let newSeats = cloneSeats(seats)
  for (let row = 0; row < seats.length; row++) {
    for (let column = 0; column < seats[row].length; column++) {
      const occupiedSeats = getOccupiedSeats(seatFunction({row, column}, seats))

      if (seats[row][column] === 'L' && occupiedSeats === 0) {
        newSeats[row][column] = '#'
      }
      if (seats[row][column] === '#' && occupiedSeats >= threshold) {
        newSeats[row][column] = 'L'
      }
    }
  }
  return newSeats
}

const getFinalSeats = (seats, seatFunction, threshold) => {
  const newSeats = runMoveSequence(seats, seatFunction, threshold)
  return (getOccupiedTotal(seats) === getOccupiedTotal(newSeats))
    ? seats
    : getFinalSeats(newSeats, seatFunction, threshold)
}

const getOccupiedTotal = seats => seats
  .reduce((acc, row) => {
    return acc + row.filter(column => column === '#').length
  }, 0)

const finalSeatCount = getOccupiedTotal(getFinalSeats(seats))
const finalSeatCount2 = getOccupiedTotal(getFinalSeats(seats, getVisibleSeats, 5))

console.log({finalSeatCount, finalSeatCount2})
