const { joltage, testJoltage1, testJoltage2 } = require('./getJoltage')
const flatDeep = require('../utils/flatDeep')

const getJoltageOneByThree = joltage => {
  let oneJolt = 0
  let threeJolt = 1
  let yourCharger = 0

  for (let i = 0; i < joltage.length; i++) {
    const prevVoltage = joltage[i - 1] || 0

    const diff = joltage[i] - prevVoltage

    switch (diff) {
      case 1:
        oneJolt += 1
        break
      case 3:
        threeJolt += 1
        break
      default:
        break
    }

    yourCharger = joltage[i] + 3
  }

  return oneJolt * threeJolt
}

const getPaths = joltage => {
  // this function mimics https://github.com/aspittel/advent-of-code/blob/master/2020/dec-10/script.py
  // my first working JS fn ran out of memory on the real data (both test sets passed) so I converted Ali's python to JS
  joltage.push((joltage[joltage.length - 1] + 3))

  const diffs = [1, 2, 3]
  const finish = joltage[joltage.length - 1]

  let done = 0
  let valueCounts = { 0: 1 }
  let newValueCounts = {}

  for (let l = 0; l <= joltage.length; l++) {
    Object.keys(valueCounts)
      .forEach(c => {
        diffs.forEach(d => {
          let sum = d + parseInt(c, 10)

          if (joltage.indexOf(sum) > -1) {
            if (sum in newValueCounts) {
            newValueCounts[sum] += valueCounts[c]
            } else {
              newValueCounts[sum] = valueCounts[c]
            }
          }
        })
      })

    if (finish in newValueCounts) {
      done += newValueCounts[finish]
    }

    valueCounts = newValueCounts
    newValueCounts = {}
  }
  return done
}

const oneByThree = getJoltageOneByThree(joltage)
const paths = getPaths(joltage)

console.log({oneByThree, paths})
