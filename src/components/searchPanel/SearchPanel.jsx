import React from 'react';

import './SearchPanel.css';

export const SearchPanel = () => {
  return (
    <input
      type='text'
      placeholder='type to search'
      className='form-control search-input'
    />
  );
};
