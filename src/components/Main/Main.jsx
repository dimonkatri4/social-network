import React from 'react'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import s from "./main.module.css"
import {Route} from 'react-router-dom'
import Dialogs from './Dialogs/Dialogs'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'

const Main = () => {
    return (
        <div className={s.main_page}>
            <Navbar/>
            <div className={s.content}>
                <Route path='/profile' component={Profile} />
                <Route path='/dialog' component={Dialogs} />
                <Route path='/news' component={News} />
                <Route path='/music' component={Music} />
                <Route path='/settings' component={Settings} />
            </div>
            <Sidebar/>
        </div>
    )
}

export default Main

