const instructions = require('./getInstructions')

const doMath = (initial, argument) => {
  if (typeof(initial) !== 'number') {
    throw new Error('`initial` value must be a number')
  }
  return parseInt(initial, 10) + parseInt(argument, 10)
}

const runCommand = ({ i, acc, usedCommandIndices, usedCommandValues, override }) => {
  i = i || 0
  acc = acc || 0
  usedCommandIndices = usedCommandIndices || []
  usedCommandValues = usedCommandValues || []
  override = override || {}

  if (usedCommandIndices.indexOf(i) > -1) {
    return {
      success: false,
      i,
      acc,
      usedCommandIndices,
      usedCommandValues,
      override
    }
  } else if (!instructions[i]) {
    return {
      success: true,
      i,
      acc,
      usedCommandIndices,
      usedCommandValues,
      override
    }
  } else {
    let { operation, argument } = instructions[i]
    usedCommandIndices.push(i)
    usedCommandValues.push(instructions[i])

    if (override && override === instructions[i]) {
      if (operation === 'nop') {
        operation = 'jmp'
      } else if (operation === 'jmp') {
        operation = 'nop'
      }
    }

    switch(operation) {
      case 'acc':
        acc = doMath(acc, argument)
        return runCommand({
          i: i + 1,
          acc,
          usedCommandIndices,
          usedCommandValues,
          override
        })
        break
      case 'jmp':
        return runCommand({
          i: doMath(i, argument),
          acc,
          usedCommandIndices,
          usedCommandValues,
          override
        })
        break
      default:
        return runCommand({
          i: i + 1,
          acc,
          usedCommandIndices,
          usedCommandValues,
          override
        })
    }
  }
}

const {
  acc: accBeforeLoop,
  usedCommandValues
} = runCommand(0, 0, [], [])

const { acc: findWrongCommand } = usedCommandValues.map(c => {
  return runCommand({
    override: c
  })
}).find(c => {
  return c.success === true
})

console.log({accBeforeLoop, findWrongCommand})
