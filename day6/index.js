const customsForms = require('./getCustomsForms')

const getUniqueQuestions = answerData => {
  const uniqueQuestions = [...new Set(answerData.replace(/\n/gi, '').split(''))]

  return uniqueQuestions
}

const getCommonQuestions = answerData => {
  const answersByPerson = answerData.split('\n').filter(a => a)

  const allAnswers = answerData.replace(/\n/gi, '').split('')

  let commonAnswers = []

  getUniqueQuestions(answerData).map(answer => {
    const occurrences = allAnswers.filter(a => a === answer)

    if (occurrences.length === answersByPerson.length) {
      commonAnswers.push(answer)
    }
  })

  return commonAnswers
}

const answeredByAnyone = customsForms.map(f => getUniqueQuestions(f)).reduce((acc, q) => acc + q.length, 0)
const answeredByEveryone = customsForms.map(f => getCommonQuestions(f)).reduce((acc, q) => acc + q.length, 0)

console.log({answeredByAnyone, answeredByEveryone})
