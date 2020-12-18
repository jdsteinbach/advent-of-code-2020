const input = require('./getInput')

const getFinal = (numbers, rounds) => {
  rounds = rounds || 2020
  let last = undefined
  let log = {}

  for (let i = 0; i < rounds; i++) {
    if (i < numbers.length) {
      last = numbers[i]
    } else {
      if (log[last].length === 1) {
        last = 0
      } else {
        const [prevNumRound, lastNumRound] = log[last]

        last = lastNumRound - prevNumRound
      }
    }

    if (Array.isArray(log[last])) {
      log[last] = [log[last].pop(), i]
    } else {
      log[last] = [i]
    }
  }

  return last
}

console.log({
  getFinal: getFinal(input),
  getFinal2: getFinal(input, 30000000)
})
