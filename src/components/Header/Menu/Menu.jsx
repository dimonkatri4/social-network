import React from 'react'
import s from "./menu.module.css"
import {NavLink} from "react-router-dom";

const Menu = (props) => {
    return (
        <ul className={`${s.menu} menu`}>
            <li><NavLink to="/">Home</NavLink></li>
            <li onClick={props.scrollToProfileEdit}><NavLink to="/profile">Timeline</NavLink></li>
            <li><NavLink to="/settings">Account Settings</NavLink></li>
            <li><NavLink to="/">More Page</NavLink></li>
        </ul>
    )
}

export default Menu