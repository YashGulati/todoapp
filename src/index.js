const React = require('react')
const ReactDOM = require('react-dom')

class TodoCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const div_style = {
      background: '#99cc99',
      color: 'white',
      display: 'inline',
      padding: 10,
      fontSize: 22,
      margin: 10,
    }
    return (
      <div style={ div_style }> Content: {this.props.text} </div>
    )
  }
}

class TodoCards extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <TodoCard text='Todo 1' />
        <TodoCard text='Todo 2' />
        <TodoCard text='Todo 3' />
        <TodoCard text='Todo 4' />
      </div>
    )
  }
}


ReactDOM.render(
  <TodoCards />,
  document.getElementById('app')
);
