const rules = require('./getRules')

const getValidParents = (children, parents) => {
  children = typeof(children) === 'string'
    ? [children]
    : children
  parents = parents || []
  const parentsLength = parents.length

  children.map(child => {
    rules.map(rule => {
      const validChildren = rule.children.filter(c => c.label === child)
      if (validChildren.length > 0) {
        parents.push(rule.parent)
      }
    })
  })

  parents = [...new Set(parents)]

  if (parents.length === parentsLength) {
    return parents
  } else {
    return getValidParents(parents, parents)
  }
}

const getAllChildren = (parent, children) => {
  children = children || []
  const childrenLength = children.length

  rules.map(rule => {
    if (rule.parent === parent) {
      children.push([rule.children])

      rule.children
        .filter(c => {
          return (c.label !== '' && c.count > 0)
        })
        .map(c => {
          children.push(Array(c.count).fill(getAllChildren(c.label)))
      })
    }
  })
  return children
}

function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
  : arr.slice();
};

const allValidParentsCount = getValidParents('shiny gold bag', []).length
const allChildrenCount = flatDeep(
  getAllChildren('shiny gold bag', []),
  Infinity
)
  .reduce((acc, c) => {
    return acc + c.count
  }, 0)

console.log({allValidParentsCount, allChildrenCount})
