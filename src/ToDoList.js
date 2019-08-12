import React, { Component } from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
import NewToDoForm from './NewToDoForm';
import uuid from 'uuid/v4';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [
        {
          toDo: 'Buy milk',
          id: uuid()
        },
        {
          toDo: 'Call Bob',
          id: uuid()
        },
        {
          toDo: 'Get gas',
          id: uuid()
        }
      ]
    };
    this.addToDo = this.addToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.editToDo = this.editToDo.bind(this);
  }

  addToDo(newToDo) {
    this.setState(curState => ({ toDos: [...curState.toDos, newToDo] }));
  }

  deleteToDo(id) {
    this.setState(curState => ({ toDos: curState.toDos.filter(toDo => toDo.id !== id) }));
  }

  editToDo(id, newValue) {
    this.setState(curState => {
      return {
        toDos: curState.toDos.map(toDo => {
          if (toDo.id === id) {
            toDo.toDo = newValue;
            return toDo;
          }
          return toDo;
        })
      };
    });
  }

  renderToDos() {
    return this.state.toDos.map(toDo => (
      <ToDo key={toDo.id} toDo={toDo.toDo} delete={this.deleteToDo} id={toDo.id} editToDo={this.editToDo} />
    ));
  }
  render() {
    return (
      <div className="ToDoList" >
        <h1 className="ToDoList-title">To-do List</h1>
        <ul className="ToDoList-list">
          {this.renderToDos()}
        </ul>
        <NewToDoForm addToDo={this.addToDo} />
      </div>
    );
  }
}

export default ToDoList;