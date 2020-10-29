import React from 'react'
import s from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={`${s.nav} profile_block`}>
            <div>
                <a href='/'>Profile</a>
            </div>
            <div>
                <a href='/'>Messages</a>
            </div>
            <div>
                <a href='/'>News</a>
            </div>
            <div>
                <a href='/'>Music</a>
            </div>
            <div>
                <a href='/'>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar