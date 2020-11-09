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
        dialogsData = {props.dialogsData}
        messagesData = {props.messagesData}
        postsData = {props.postsData}
      />
    </div>
  );
}

export default App;
