import React from 'react';
import './App.css';
import './common/style/reset.css'
import Cover from './components/Cover/Cover';
import Header from './components/Header/Header';
import MainContainer from "./components/Main/MainContainer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Cover/>
      <MainContainer />
    </div>
  );
}

export default App;
