import React from 'react';
import './App.css';
import './common/style/reset.css'
import Cover from './components/Cover/Cover';
import Header from './components/Header/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Cover/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
