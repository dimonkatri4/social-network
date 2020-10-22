import React from 'react';
import './App.css';
import './common/style/reset.css'
import Cover from './components/Cover/Cover';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Cover/>
      <Main/>
    </div>
  );
}

export default App;
