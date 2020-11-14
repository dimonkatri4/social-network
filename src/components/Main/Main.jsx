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
                    state={props.state.profilePage}
                    />} 
                />
                <Route path='/dialog' render={() =>
                    <Dialogs
                        state = {props.state.dialogsPage}
                    />}
                />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Sidebar state={props.state.friendsPage} />
        </div>
    )
}

export default Main

