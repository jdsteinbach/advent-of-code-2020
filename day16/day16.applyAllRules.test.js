const { applyAllRules } = require('./index')

const rules = [
  {rule1: [1, 5], rule2: [8, 18]},
  {rule1: [0, 5], rule2: [12, 78]},
  {rule1: [4, 6], rule2: [11, 28]}
]

test.each([
  [rules, 0, true],
  [rules, 1, true],
  [rules, 5, true],
  [rules, 6, true],
  [rules, 7, false],
  [rules, 8, true],
  [rules, 19, true],
  [rules, 99, false]
])('applyAllRules: %v', (rule, value, expected) => {
  expect(applyAllRules(rule, value)).toBe(expected)
})
