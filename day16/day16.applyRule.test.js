const { applyRule } = require('./index')

test.each([
  [{rule1: [1, 5], rule2: [8, 18]}, 0, false],
  [{rule1: [1, 5], rule2: [8, 18]}, 1, true],
  [{rule1: [1, 5], rule2: [8, 18]}, 5, true],
  [{rule1: [1, 5], rule2: [8, 18]}, 6, false],
  [{rule1: [1, 5], rule2: [8, 18]}, 7, false],
  [{rule1: [1, 5], rule2: [8, 18]}, 8, true],
  [{rule1: [1, 5], rule2: [8, 18]}, 18, true],
  [{rule1: [1, 5], rule2: [8, 18]}, 19, false]
])('applyRule: %o %v', (rule, value, expected) => {
  expect(applyRule(rule, value)).toBe(expected)
})
