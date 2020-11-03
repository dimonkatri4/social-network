import React from 'react'
import s from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={`${s.nav} profile_block`}>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/dialog'>Messages</a>
            </div>
            <div>
                <a href='/news'>News</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar