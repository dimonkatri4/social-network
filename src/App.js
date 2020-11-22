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
        addPost = {props.addPost}
        updateNewPostText = {props.updateNewPostText}
        addMessage = {props.addMessage}
        updateNewMessageText = {props.updateNewMessageText}
      />
    </div>
  );
}

export default App;
