import React from 'react';
import './App.css';
import './common/style/reset.css'
import Header from './components/Header/Header';
import MainContainer from "./components/Main/MainContainer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <MainContainer />
    </div>
  );
}

export default App;
