const React = require('react')
import TodoCard from './TodoCard'
export default class TodoCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {new_content: '', todolist: ["T1","T2","T3","T4","T5"]}
  }
  onChange = (e) => {
    const new_content = e.target.value
    this.setState({ new_content })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const new_todolist = this.state.todolist
    new_todolist.push(this.state.new_content)
    this.setState({ todolist: new_todolist })
  }
  render() {
    return (
      <div>
        {
          this.state.todolist.map( (todo, i) => {
            return <TodoCard key={i} text={todo} />
          })
        }
        <form onSubmit={this.onSubmit} className="col-md-6 offset-md-3">
          <input onChange={this.onChange} className='form-control' />
          <p>{this.state.new_content}</p>
          <p>{this.state.todolist}</p>
        </form>
      </div>
    )
  }
}
