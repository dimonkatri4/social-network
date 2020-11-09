import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

let dialogsData = [
  { name: 'Dima', id: '1' },
  { name: 'Oleg', id: '2' },
  { name: 'Yuriy', id: '3' },
  { name: 'Petro', id: '4' },
  { name: 'Andriy', id: '5' }
]

let messagesData = [
  { id: '1', message: 'Hi!' },
  { id: '2', message: 'How are you?' },
  { id: '3', message: 'Do you like coffe?' },
  { id: '4', message: 'YO!' },
  { id: '5', message: 'Blablabla' }
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App 
        dialogsData = {dialogsData}
        messagesData = {messagesData}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
