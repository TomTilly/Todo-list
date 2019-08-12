import React, { Component } from 'react';
import './ToDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

class ToDo extends Component {
  static defaultProps = {
    toDo: 'Buy milk'
  }
  render() {
    return (
      <li className="ToDo">
        <span className="ToDo-item">{this.props.toDo}</span>
        <button className="ToDo-button"><FontAwesomeIcon icon={faEdit} /></button>
        <button className="ToDo-button"><FontAwesomeIcon icon={faTrash} /></button>
      </li>
    )
  }
}

export default ToDo;