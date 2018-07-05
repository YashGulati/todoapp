const express = require('express')
const app = express()
const Todo = require('./models/Todo')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/pradeep_todolist')

app.use(express.static('public'))


app.get('/add-todo', (req, res) => {
  const {content} = req.query
  if (!content) return res.send('Please send the content.')
  const new_todo = new Todo({content})
  new_todo.save((err, todo) => {
    if (err) return res.status(500).send(err)
    res.send({ status: 'success', todo })
  })
})

app.get('/get-todos', (req, res) => {
  Todo.find({}, (err, todos) => {
    res.send(todos)
  })
})

app.listen(80, () => {
  console.log('Server is listening on port 80...')
})
