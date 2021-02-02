import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import s from "./main.module.css"
import { Route } from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";

const Main = (props) => {
    debugger
    return (
        <div className={s.main_page}>
            <Navbar />

                <Route path='/profile/:userId?' render={() => <ProfileContainer
                    profilePage={props.profilePage}
                    />}
                />
            <div className={s.content}>
                <Route path='/dialog' render={() =>
                    <Dialogs
                    dialogsPage = {props.dialogsPage}
                    isAuth={props.isAuth}
                    />}
                />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
                <Route path='/users' component={UsersContainer} />
                <Route path='/login' component={Login}/>
            </div>
            <Sidebar sidebarPage={props.sidebarPage} />
        </div>
    )
}

export default Main

