import React from 'react';

import './todoListItem.css';

export const TodoListItem = ({ label, important, done }) => {
  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }

  return (
    <span className={classNames}>
      <span className='todo-list-item-label'>{label}</span>

      <button
        type='button'
        className='btn btn-outline-success btn-sm float-right'
      >
        <i className='fa fa-exclamation' aria-hidden='true'></i>
      </button>

      <button
        type='button'
        className='btn btn-outline-danger btn-sm float-right'
      >
        <i className='fa fa-trash-o' aria-hidden='true'></i>
      </button>
    </span>
  );
};
