const React = require('react')
const ReactDOM = require('react-dom')
const styles = require('./index.styl')
import TodoCard from './components/TodoCard'

class TodoCards extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let todolist = [1,3,4,5,9];
    return (
      <div>
        {
          todolist.map( (todo) => {
            return <TodoCard text={'Todo no' + todo} />
          })
        }

        <TodoCard text='Todo no 2' />
        <TodoCard text='Todo no 3' />
        <TodoCard text='Todo no 4' />
      </div>
    )
  }
}


ReactDOM.render(
  <TodoCards />,
  document.getElementById('app')
);
