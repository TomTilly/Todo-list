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
    this.state = {
      isEditting: false,
      toDo: this.props.toDo,
      markedDone: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    if (e.target.dataset.type === 'edit') {
      // edit item
      this.setState({ isEditting: true });

    } else if (e.target.dataset.type === 'delete') {
      // remove item
      this.props.delete(this.props.id);
    } else {
      console.log(e.target);
      this.setState(curState => ({ markedDone: !curState.markedDone }));
    }
  }

  handleChange(e) {
    this.setState({ toDo: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editToDo(this.props.id, this.state.toDo);
    this.setState({ isEditting: false });
  }

  render() {
    return (
      <li className="ToDo">
        {!this.state.isEditting
          ?
          <div className={`ToDo-inner-container ${this.state.markedDone ? 'done' : ''}`} onClick={this.handleClick}>
            <span className="ToDo-item">{this.props.toDo}</span>
            <button className="ToDo-button" data-type="edit" onClick={this.handleClick}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="ToDo-button" data-type="delete" onClick={this.handleClick}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
          :
          <form className="ToDo-inline-edit-form" onSubmit={this.handleSubmit}>
            <div className="ToDo-inline-input-container">
              <input
                className="ToDo-inline-input"
                type="text"
                name="toDo"
                id="toDo"
                value={this.state.toDo}
                onChange={this.handleChange}
              />
              <button className="ToDo-inline-save-button">Save</button>
            </div>
          </form>
        }

      </li>
    )
  }
}

export default ToDo;