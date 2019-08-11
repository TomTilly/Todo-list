import React, { Component } from 'react';
import './NewToDoForm.css';

class NewToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
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
          />
          <button className="NewToDoForm-button">Add to-do</button>
        </div>
      </form>
    )
  }
}

export default NewToDoForm;