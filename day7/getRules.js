const getData = require('../utils/getData')

module.exports = getData('day7/rules.txt').map(r => {
  const [ parent, children ] = r.split(' contain ')

  return {
    parent: parent.replace('bags', 'bag'),
    children: children.replace('.', '').split(',').map(child => {
      const matches = child.match(/(\d)\s([\w\s]+\sbag)/)

      return {
        count: matches ? parseInt(matches[1], 10) : 0,
        label: matches ? matches[2] : ''
      }
    })
  }
})
