import React, { Component } from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm'

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: []
    };
  }

  renderToDos() {
    this.state.toDos.map(toDo => (
      <ToDo toDo={toDo.toDo} />
    ));
  }
  render() {
    return (
      <div className="ToDoList">
        <h1 className="ToDoList-title">To Do List</h1>
        <ToDo />
        <NewToDoForm />
      </div>
    )
  }
}

export default ToDoList;