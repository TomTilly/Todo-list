import React, { Component } from 'react'

class ToDo extends Component {
  static defaultProps = {
    toDo: 'Buy milk'
  }
  render() {
    return (
      <div className="ToDo">
        {this.props.toDo}
      </div>
    )
  }
}

export default ToDo;