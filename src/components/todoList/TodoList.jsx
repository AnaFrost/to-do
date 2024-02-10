import React from 'react';

import { TodoListItem } from '../todoListItem/TodoListItem';

import './todo-list.css';

export const TodoList = ({ items, onDeleted }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item'>
        <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)} />
      </li>
    );
  });

  return <ul className='todo-list list-group'>{elements}</ul>;
};
