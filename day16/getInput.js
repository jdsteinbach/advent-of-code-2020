const path = require('path')

const getData = require('../utils/getData')

const data = getData(path.join(__dirname, 'input.txt'))

const rules = data
  .map(l => {
    const matches = l.match(/^([\w\s]+): (\d+-\d+) or (\d+-\d+)$/m)
    if (Array.isArray(matches)) {
      const [raw, name, rule1, rule2] = matches
      return {
          name,
          rule1: rule1.split('-').map(v => parseInt(v, 10)),
          rule2: rule2.split('-').map(v => parseInt(v, 10))
        }
    } else {
      return false
    }
  })
  .filter(l => l)

const myTicket = data => {
  const i = data.findIndex(l => l === 'your ticket:')
  return data[i + 1].split(',').map(v => parseInt(v, 10))
}

const nearbyTickets = data => {
  const i = data.findIndex(l => l === 'nearby tickets:')
  return data.slice(i + 1).map(l => l.split(',').map(v => parseInt(v, 10)))
}

module.exports = {
  rules,
  myTicket: myTicket(data),
  nearbyTickets: nearbyTickets(data)
}
