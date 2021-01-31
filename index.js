const express = require('express')
const { isPositiveInt } = require('./validate')
const app = express()

app.get('/romannumeral', (req, res) => {
  let error
  if (!req.query.query) {
    error = "No value was provided in the query component: ?query={integer}"
  } else if (!isPositiveInt(req.query.query)) {
    error = `'${req.query.query}' is not a valid positive integer`
  }
  if (error) {
    res.status(400).send(error)
  } else {
    res.send('XV')
  }
})

app.listen(8080, () => {
  console.log('Listening to port 8080')
})