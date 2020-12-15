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
    debugger;
    return (
        <div className={s.main_page}>
            <Navbar />
            <div className={s.content}>
                <Route path='/profile' render={() => <Profile
                    profilePage={props.state.profilePage}
                    store = {props.store}
                    />}
                />
                <Route path='/dialog' render={() =>
                    <Dialogs
                    dialogsPage = {props.state.dialogsPage}
                    store = {props.store}
                    />}
                />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Sidebar sidebarPage={props.state.sidebarPage} />
        </div>
    )
}

export default Main

