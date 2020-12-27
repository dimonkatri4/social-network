import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={`${s.nav} profile_block`}>
            <div className={`${s.caption} caption`}>
                <h3 className="title">Shortcuts</h3>
            </div>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div >
            <div className={s.item}>
                <NavLink to='/dialog' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
        </nav>
    )
}

export default Navbar