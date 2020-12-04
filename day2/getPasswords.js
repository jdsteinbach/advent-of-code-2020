const getData = require('../utils/getData')

module.exports = getData('day2/passwords.txt').map(l => {
  const [ policy, password ] = l.split(': ')
  if (policy && password) {
    return {
      policy,
      password
    }
  }
})
