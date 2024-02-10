import React, { Component } from 'react';

import './AddTodoForm.css';

export class AddTodoForm extends Component {
  render() {
    return (
      <form className='bottom-panel d-flex'>
        <input
          type='text'
          placeholder='What needs to be done?'
          className='form-control new-todo-label'
        />
        <button
          type='submit'
          className='btn btn-outline-secondary'
          onClick={() => this.props.onItemAdded('Hello')}
        >
          Add
        </button>
      </form>
    );
  }
}
