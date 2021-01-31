const express = require('express')
const app = express()

app.get('/romannumeral', (req, res) => {
  res.send('XV')
})

app.listen(8080, () => {
  console.log('Listening to port 8080')
})