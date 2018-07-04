const express = require('express')
const app = express()

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pradeep_todolist')

app.use(express.static('public'))


app.listen(80, () => {
  console.log('Server is listening on port 80...')
})
