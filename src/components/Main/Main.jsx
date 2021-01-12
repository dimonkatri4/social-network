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
import UsersContainer from "./Users/UsersContainer";

const Main = (props) => {
    return (
        <div className={s.main_page}>
            <Navbar />
            <div className={s.content}>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.profilePage}
                    />}
                />
                <Route path='/dialog' render={() =>
                    <Dialogs
                    dialogsPage = {props.dialogsPage}
                    />}
                />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/users' component={UsersContainer} />
            </div>
            <Sidebar sidebarPage={props.sidebarPage} />
        </div>
    )
}

export default Main

