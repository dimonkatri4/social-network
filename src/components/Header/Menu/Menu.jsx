import React from 'react'
import s from "./menu.module.css"

const Menu = () => {
    return (
        <ul className={`${s.menu} menu`}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Timeline</a></li>
            <li><a href="/">Account Settings</a></li>
            <li><a href="/">More Page</a></li>
        </ul>
    )
}

export default Menu