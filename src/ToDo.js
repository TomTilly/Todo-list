import React, { Component } from 'react';
import './ToDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class ToDo extends Component {
  static defaultProps = {
    toDo: 'Buy milk'
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    if (e.target.dataset.type === 'edit') {
      // edit item
      console.log('edit');
    } else {
      // remove item
      console.log('delete');
      this.props.delete(this.props.id);
    }
  }
  render() {
    return (
      <li className="ToDo">
        <span className="ToDo-item">{this.props.toDo}</span>
        <button className="ToDo-button" data-type="edit" onClick={this.handleClick}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="ToDo-button" data-type="delete" onClick={this.handleClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </li>
    )
  }
}

export default ToDo;