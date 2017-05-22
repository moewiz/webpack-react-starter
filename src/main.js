import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter.js';

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  );
});
