const express = require('express')
const { convertToRoman } = require('./functions/convert-to-roman')
const { isPositiveInt } = require('./functions/validate')
const app = express()

app.get('/romannumeral', (req, res) => {
  let error
  const {query: providedValue} = req.query
  if (!providedValue) {
    error = "No value was provided on the expected query parameter: ?query={integer}";
  } else if (!isPositiveInt(providedValue)) {
    error = `'${providedValue}' is not a valid positive integer`;
  }
  if (error) {
    res.status(400).send(error)
  } else {
    res.send(convertToRoman(providedValue))
  }
})

app.get('*', (req, res) => { // fallback
  res.status(404).send()
})

app.listen(8080, () => {
  console.log('Listening to port 8080')
})