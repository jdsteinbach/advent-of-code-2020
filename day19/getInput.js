const path = require('path')

const getData = require('../utils/getData')

const data = getData(path.join(__dirname, 'input.txt')).filter(l => l)

const messages = data
  .filter(l => {
    return l.match(/^\d/)
  })

const rules = data
  .filter(l => {
    return l.match(/^[A-Za-z]/)
  })

module.exports = {
  messages: messages,
  rules: rules
}
