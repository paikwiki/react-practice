import React from 'react';
import ReactDOM from 'react-dom';

const name = 'paikwiki';
const element = `Hello, ${name}`;

ReactDOM.render(
  element,
  document.querySelector('#root'),
);
