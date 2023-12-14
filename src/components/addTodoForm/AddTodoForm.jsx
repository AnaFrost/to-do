import React from 'react';

import './AddTodoForm.css';

export const AddTodoForm = () => {
  return (
    <form className='bottom-panel d-flex'>
      <input
        type='text'
        placeholder='What needs to be done?'
        className='form-control new-todo-label'
      />
      <button type='submit' className='btn btn-outline-secondary'>
        Add
      </button>
    </form>
  );
};
