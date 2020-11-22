import React from 'react'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import s from "./main.module.css"
import { Route } from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'

const Main = (props) => {
    return (
        <div className={s.main_page}>
            <Navbar />
            <div className={s.content}>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText = {props.updateNewPostText}
                    />} 
                />
                <Route path='/dialog' render={() =>
                    <Dialogs
                    dialogsPage = {props.state.dialogsPage}
                    addMessage = {props.addMessage}
                    updateNewMessageText = {props.updateNewMessageText}
                    />}
                />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Sidebar state={props.state.sidebarPage} />
        </div>
    )
}

export default Main

