const { input, testInput } = require('./getInput')

const doMath = input => {
  const hasOuterParens = input.match(/^\((.*)\)$/)

  let answer = hasOuterParens
    ? hasOuterParens[0]
    : `${input}`

  const innerParens = answer.match(/(?:\(([^\(^\)]+)\))/g)

  if (innerParens) {
    innerParens.forEach(p => {
      const innerExp = p.replace('(', '').replace(')', '')

      answer = answer.replace(p, doMath(innerExp))
    })
  } else {
    let [a, op, b, ...etc] = answer.split(' ')

    answer = [eval([a, op, b].join(' ')), ...etc]

    if (answer.length > 0) {
      answer = answer.join(' ')
    } else {
      answer = answer[0]
    }
  }

  if (answer.match(/^\s?(\d+)\s?$/)) {
    return parseInt(answer, 10)
  } else {
    return doMath(answer)
  }
}

const doAdvancedMath = input => {
  const hasOuterParens = input.match(/^\((.*)\)$/)

  let answer = hasOuterParens
    ? hasOuterParens[0]
    : `${input}`

  const innerParens = answer.match(/(?:\(([^\(^\)]+)\))/g)

  if (innerParens) {
    innerParens.forEach(p => {
      const innerExp = p.replace('(', '').replace(')', '')

      answer = answer.replace(p, doAdvancedMath(innerExp))
    })
  } else {
    const addSubtract = answer.match(/\d+\s[+-]\s\d+/g)

    if (addSubtract) {
      addSubtract.forEach(op => {
        answer = answer.replace(op, eval(op))
      })
    } else {
      let [a, op, b, ...etc] = answer.split(' ')

      answer = [eval([a, op, b].join(' ')), ...etc]

      if (answer.length > 0) {
        answer = answer.join(' ')
      } else {
        answer = answer[0]
      }
    }
  }

  if (answer.match(/^\s?(\d+)\s?$/)) {
    return parseInt(answer, 10)
  } else {
    return doAdvancedMath(answer)
  }
}

const sumAnswers = input => input.map(i => doMath(i)).reduce((acc, i) => acc + i, 0)
const sumAdvancedAnswers = input => input.map(i => doAdvancedMath(i)).reduce((acc, i) => acc + i, 0)

console.log({
  answer1: sumAnswers(input),
  answer2: sumAdvancedAnswers(input)
})
