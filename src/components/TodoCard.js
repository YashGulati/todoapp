const React = require('react')
export default class TodoCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {todo} = this.props
    return (
      <div className="col-md-6 offset-md-3 todocard">
        <div className="text-center"> ID: {todo.id} </div>
        <div className="text-center"> Time: {todo.time} </div>
        <div className="text-center"> Content: {todo.content} </div>
      </div>

    )
  }
}
