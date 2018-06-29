const React = require('react')
export default class TodoCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="col-md-6 text-center offset-md-3 todocard"> Content: {this.props.text} </div>
    )
  }
}
