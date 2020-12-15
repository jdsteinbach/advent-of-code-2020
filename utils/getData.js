const { readFileSync } = require('fs')

const getData = (filePath, splitter) => {
  splitter = typeof(splitter) === 'undefined'
    ? /\r?\n/
    : splitter

  try {
    const data = readFileSync(filePath, 'UTF-8')

    const lines = splitter
      ?  data.split(splitter).filter(line => line)
      : data

    return lines
  } catch (err) {
    console.error(err)
    return []
  }
}

module.exports = getData
