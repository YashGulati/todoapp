const React = require('react')
import TodoCard from './TodoCard'
export default class TodoCards extends React.Component {
  constructor(props) {
    super(props)
    this.next_id = 14
    this.state = { todolist: [
      { id: 10, time: '10:10:10', content: 'first todo' },
      { id: 11, time: '11:10:10', content: 'second todo' },
      { id: 12, time: '12:10:10', content: 'third todo' },
      { id: 13, time: '13:10:10', content: 'fourth todo' },
    ]}
  }
  onChange = (e) => {
    const new_content = e.target.value
    this.setState({ new_content })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const new_todolist = this.state.todolist
    const new_obj = {
      id: this.next_id++,
      time: new Date().toString(),
      content: this.state.new_content,
    }
    new_todolist.push(new_obj)
    this.setState({ todolist: new_todolist })
  }
  render() {
    return (
      <div>
        {
          this.state.todolist.map( (todo, i) => {
            return <TodoCard key={i} todo={todo} />
          })
        }
        <form onSubmit={this.onSubmit} className="col-md-6 offset-md-3">
          <input onChange={this.onChange} className='form-control' />
          <p>{this.state.new_content}</p>
          <p>{ JSON.stringify(this.state.todolist) }</p>
        </form>
      </div>
    )
  }
}
