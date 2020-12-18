const { getTicketErrorRate } = require('./index')

const tickets = [
  [7,3,47],
  [40,4,50],
  [55,2,20],
  [38,6,12]
]

const tickets2 = [
  [7,3,47],
  [40,4,50],
  [55,2,20],
  [38,6,12],
  [6,14,999]
]

const tickets3 = [
  [7,3,47],
  [55,2,20],
  [38,6,12]
]

const rules = [
  {rule1: [1,3], rule2: [5,7]},
  {rule1: [6,11], rule2: [33,44]},
  {rule1: [13,40], rule2: [45,50]},
]

test.each([
  [tickets, rules, 71],
  [tickets2, rules, (71+999)],
  [tickets3, rules, (71-4)],
])('getTicketErrorRate', (tickets, rule, expected) => {
  expect(getTicketErrorRate(tickets, rule)).toBe(expected)
})
