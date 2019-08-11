import React, { Component } from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        {
          toDo: 'Buy milk'
        },
        {
          toDo: 'Call Bob'
        },
        {
          toDo: 'Get gas'
        }
      ]
    };
  }

  renderToDos() {
    return this.state.toDos.map(toDo => (
      <ToDo toDo={toDo.toDo} />
    ));
  }
  render() {
    return (
      <div className="ToDoList">
        <h1 className="ToDoList-title">To-do List</h1>
        <ul className="ToDoList-list">
          {this.renderToDos()}
        </ul>
        <NewToDoForm />
      </div>
    )
  }
}

export default ToDoList;