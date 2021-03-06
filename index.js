const express = require('express')
const { convertToRoman } = require('./functions/convert-to-roman')
const { isPositiveInt } = require('./functions/validate')
const app = express()
const fs = require('fs')

app.get('/romannumeral', (req, res) => {
  let error
  const {query: providedValue} = req.query
  if (!providedValue) {
    error = "No value was provided on the expected query parameter: ?query={integer}";
  } else if (!isPositiveInt(providedValue)) {
    error = `'${providedValue}' is not a valid positive integer`;
  } else if (providedValue > 3999) {
    error = `'${providedValue}' is greater than the supported 3999`
  }
  if (error) {
    res.status(400).send(error)
    fs.appendFile('error.txt', `\n${req.connection.remoteAddress} | ${providedValue} | ${new Date().toISOString()}`, (err) => console.log(err))
  } else {
    res.send(convertToRoman(providedValue))
    fs.appendFile('logging.txt', `\n${req.connection.remoteAddress} | ${providedValue} | ${new Date().toISOString()}`, (err) => console.log(err))
  }
})

app.get('*', (req, res) => { // fallback
  res.status(404).send()
})

app.listen(8080, () => {
  console.log('Listening to port 8080')
})