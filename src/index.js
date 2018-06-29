const React = require('react')
const ReactDOM = require('react-dom')
const styles = require('./index.styl')
class TodoCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const div_style = {
      background: '#99cc99',
      color: 'white',
      padding: 10,
      fontSize: 22,
      marginBottom: 15,
    }
    return (
      <div class="col-md-6 text-center offset-md-3" style={ div_style }> Content: {this.props.text} </div>
    )
  }
}

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
