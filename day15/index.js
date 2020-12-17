const input = require('./getInput')

const getFinal = (numbers, rounds) => {
  rounds = rounds || 2020
  let last = undefined
  let log = {}
  console.time('getFinal')

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

  console.timeEnd('getFinal')

  return last
}

console.log({
  testa: getFinal([0,3,6], 10),
  // test1: getFinal([1,3,2]),
  // test10: getFinal([2,1,3]),
  // test27: getFinal([1,2,3]),
  // test78: getFinal([2,3,1]),
  test438: getFinal([3,2,1]),
  test1836: getFinal([3,1,2]),
  getFinal: getFinal(input),
  getFinal2: getFinal(input, 30000000)
})
