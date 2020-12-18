const {
  rules,
  myTicket,
  nearbyTickets
} = require('./getInput')

const applyRule = (rule, value) => {
  const { rule1, rule2 } = rule

  return (
    value >= rule1[0] &&
    value <= rule1[1]
  ) || (
    value >= rule2[0] &&
    value <= rule2[1]
  )
}

const applyAllRules = (rules, value) => {
  return rules.some(r => applyRule(r, value))
}

const getTicketErrorRate = (tickets, rules) => {
  let invalidValues = []
  tickets.forEach((t, ti) => {
    t.forEach(v => {
      const valid = applyAllRules(rules, v)
      if (!valid) {
        invalidValues.push({
          index: ti,
          value: v
        })
      }
    })
  })

  return invalidValues.reduce((acc, i) => acc + i.value, 0)
}

const getValidTickets = (tickets, rules) => {
  return tickets.filter(t => {
    return t.every(v => applyAllRules(rules, v))
  })
}

const answer1 = getTicketErrorRate(nearbyTickets, rules)

const reducePositions = positions => {
  const l = Object.values(positions).sort((a, b) => a - b)[0].length

  for (let i = 0; i < l; i++) {
    for (let k in positions) {
      if (positions[k].length === 1) {
        const v = positions[k][0]
        for (let j in positions) {
          if (j !== k) {
            const i = positions[j].indexOf(v)
            if (i > -1) {
              positions[j].splice(i, 1)
            }
          }
        }
      }
    }
  }

  for (let k in positions) {
    positions[k] = positions[k][0]
  }
  return positions
}

const getRulePositions = (rules, tickets) => {
  let possiblePositions = {}
  const l = tickets[0].length
  rules.forEach(r => {
    possiblePositions[r.name] = []

    for(i = 0; i < l; i++) {
      if (tickets.every(t => applyRule(r, t[i]))) {
        possiblePositions[r.name].push(i)
      }
    }
  })

  return reducePositions(possiblePositions)
}

const getDepartureValues = (rules, nearbyTickets, myTicket) => {
  const validTickets = getValidTickets(nearbyTickets, rules)
  const positions = getRulePositions(rules, validTickets)

  return Object.keys(positions)
    .filter(k => k.indexOf('departure ') === 0)
    .map(k => myTicket[positions[k]])
    .reduce((acc, i) => acc * i, 1)
}

const answer2 = getDepartureValues(rules, nearbyTickets, myTicket)

console.log({answer1, answer2})

module.exports = {
  applyRule,
  applyAllRules,
  getTicketErrorRate,
  reducePositions
}
