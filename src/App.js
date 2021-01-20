import React from 'react';
import './App.css';
import './common/style/reset.css'
import MainContainer from "./components/Main/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <MainContainer />
    </div>
  );
}

export default App;
