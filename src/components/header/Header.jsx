import React from 'react';

import './Header.css';

export const Header = () => {
  return (
    <div className='header d-flex'>
      <h1>Todo list</h1>
      <h2>
        {} more to do,{} done
      </h2>
    </div>
  );
};
