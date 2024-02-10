import React, { Component } from 'react';

import { Header } from '../components/header';
import { SearchPanel } from '../components/searchPanel';
import { ItemStatusFilter } from '../components/itemStatusFilter';
import { TodoList } from '../components/todoList';
import { AddTodoForm } from '../components/addTodoForm';

import './App.css';

export class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Learn JavaScript', important: false, done: false },
      { id: 3, label: 'Learn React', important: false, done: false },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return { todoData: newArray };
    });
  };

  addItem = (text) => {
    const newItem = {
      id: this.maxId++,
      label: text,
      impornant: false,
      done: false,
    };

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return { todoData: newArray };
    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className='app'>
        <Header toDo={3} done={0} />
        <div className='search-panel d-flex'>
          <SearchPanel />

          <ItemStatusFilter />
        </div>
        <TodoList items={todoData} onDeleted={this.deleteItem} />
        <AddTodoForm onItemAdded={this.addItem} />
      </div>
    );
  }
}
