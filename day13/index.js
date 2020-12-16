const [ time, ids] = require('./getNotes')

const earliestDeparture = parseInt(time, 10)
const busses = ids.split(',')

const firstQuestionBusses = busses.filter(bus => bus !== 'x').map(bus => parseInt(bus, 10))

const secondQuestionBusses = busses
  .map((bus, i) => {
    return {
      bus,
      i
    }
  })
  .filter(bus => bus.bus !== 'x')
  .map(bus => ({
    bus: parseInt(bus.bus, 10),
    i: bus.i
  }))
  .sort((a, b) => b.bus - a.bus)

const firstBus = firstQuestionBusses
  .map(b => {
    let firstDeparture = Math.ceil(time/b) * b

    let waitTime = firstDeparture - time

    return {id: b, firstDeparture, waitTime}
  })
  .sort((a, b) => b.waitTime - a.waitTime)
  .pop()

const getBusIdentifier = b => b.id * b.waitTime

const getSequentialDepartures = busses => {
  let time
  let i = 151285930408
  const { bus: largestId, i: largestIndex} = [...busses].shift()

  console.log({largestId, largestIndex})

  // i think the logic is sound here but it takes longer than i have memory
  // will revisit other techniques later

  findtime: while (!time) {
    const attemptedTimestamp = largestId * i
    let modulos = 0
    for (let b = 1; b < busses.length; b++) {
      const bus = busses[b]
      let thisBusTimestamp = attemptedTimestamp - largestIndex + bus.i
      let thisModulo = thisBusTimestamp % bus.bus
      if (thisModulo !== 0) {
        i++
        continue findtime
      } else {
        modulos += thisModulo
      }
    }
    if (modulos === 0) {
      time = attemptedTimestamp - largestIndex
    }
    i++
  }

  return time
}

console.log({
  secondQuestionBusses,
  // seq: getSequentialDepartures(secondQuestionBusses),
  firstBus: getBusIdentifier(firstBus)
})
