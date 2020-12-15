import React from 'react';
import './App.css';
import './common/style/reset.css'
import Cover from './components/Cover/Cover';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Cover/>
      <Main
        state = {props.state}
        store = {props.store}
      />
    </div>
  );
}

export default App;
