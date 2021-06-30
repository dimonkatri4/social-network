import React from 'react'
import s from "./menu.module.css"
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <ul className={`${s.menu} menu`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li onClick={props.scrollToProfileEdit}><NavLink to="/profile">Timeline</NavLink></li>
            <li><NavLink to="/settings">Account Settings</NavLink></li>
            <li className={s.morePageItem}><a>More Page</a>
                <ul className={s.dropMenu}>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                </ul>
            </li>
        </ul>
    )
}

export default Menu