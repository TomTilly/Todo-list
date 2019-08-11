import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
  static defaultProps = {
    toDo: 'Buy milk'
  }
  render() {
    return (
      <li className="ToDo">
        {this.props.toDo}
      </li>
    )
  }
}

export default ToDo;