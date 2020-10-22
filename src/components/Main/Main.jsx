import React from 'react'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import Sidebar from './Sidebar/Sidebar'
import s from "./main.module.css"

const Main = () => {
    return (
        <div className={s.main_page}>
            <Navbar/>
            <Profile/>
            <Sidebar/>
        </div>
    )
}

export default Main

