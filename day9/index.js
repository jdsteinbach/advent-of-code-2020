const numbers = require('./getNumbers')

const isSumInPreamble = (sum, preamble) => {
  const foundSum = preamble.filter((a, idxa) => {
    return preamble
      .filter((b, idxb) => {
        return idxa !== idxb
      })
      .filter(c => {
        return parseInt(a, 10) + parseInt(c, 10) === parseInt(sum, 10)
      }).length > 0
  })

  return foundSum.length > 0
}

const findWeakness = (sum, numbers) => {
  let weakness = 0
  sum = parseInt(sum, 10)

  for (let i = 0; i < numbers.length; i++) {
    let possibleSum = 0
    let sumIterator = i
    let values = []

    while (possibleSum < sum) {
      possibleSum = possibleSum + numbers[sumIterator]
      values.push(numbers[sumIterator])
      sumIterator++
    }

    if (possibleSum > sum) {
      continue
    }

    if (possibleSum === sum) {
      const sortedValues = values.sort((a, b) => a - b)
      weakness = values[0] + values[values.length - 1]
      break
    }
  }

  return weakness
}

let failure = ''

for (let i = 25; i < numbers.length; i++) {
  const preamble = numbers.slice((i - 25), i)

  if (!isSumInPreamble(numbers[i], preamble)) {
    failure = numbers[i]
    break
  }
}

let weakness = findWeakness(failure, numbers)

console.log({failure, weakness})
