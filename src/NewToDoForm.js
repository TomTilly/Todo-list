import React, { Component } from 'react';
import './NewToDoForm.css';
import uuid from 'uuid/v4';


class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const newToDo = {
      toDo: this.state.toDo,
      id: uuid()
    };
    this.props.addToDo(newToDo);
    this.setState({ toDo: '' });
  }

  handleChange(e) {
    this.setState({ toDo: e.target.value });
  }

  render() {
    return (
      <form className="NewToDoForm" onSubmit={this.handleSubmit}>
        <label className="NewToDoForm-label" htmlFor="toDo">New to-do</label>
        <div className="NewToDoForm-input-container">
          <input
            className="NewToDoForm-input"
            type="text"
            name="toDo"
            id="toDo"
            placeholder="New to-do"
            value={this.state.toDo}
            onChange={this.handleChange}
          />
          <button className="NewToDoForm-button">Add to-do</button>
        </div>
      </form>
    )
  }
}

export default NewToDoForm;