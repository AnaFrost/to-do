import React from 'react';

import { Header } from '../components/header';
import { SearchPanel } from '../components/searchPanel';
import { ItemStatusFilter } from '../components/itemStatusFilter';
import { TodoList } from '../components/todoList';
import { AddTodoForm } from '../components/addTodoForm';

import './App.css';

export const App = () => {
  const todoData = [
    { id: 1, label: 'Drink Coffee' },
    { id: 2, label: 'Learn JavaScript' },
    { id: 3, label: 'Learn React' },
  ];

  return (
    <div className='app'>
      <Header />
      <div className='search-panel d-flex'>
        <SearchPanel />

        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
      <AddTodoForm />
    </div>
  );
};
