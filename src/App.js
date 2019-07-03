import React from 'react';
import './App.css';
import uuid from 'uuid/v4';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

class App extends React.Component {

  state = { items: [] }

  handleFormSubmit = (toDoInput) => {
    let currentItems = this.state.items;
    currentItems.push({
      id: uuid(),
      action: toDoInput
    });

    this.setState({items: currentItems});
  }

  removeItem = (itemKey) => {
    let currentItems = this.state.items;
    currentItems = currentItems.filter(item => {
        return item.id !== itemKey;
    });

    this.setState({items: currentItems});

  }

  render() {
    return (
      <div className="App">
        <div className="header">To Do List</div>
        <ToDoForm className="toDo-search" toDoAction={this.handleFormSubmit}/>
        <ToDoList className="toDo-list" items={this.state.items} onDelete={this.removeItem}/>
      </div>
    );
  }
}

export default App;
