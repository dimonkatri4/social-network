import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import SettingArea from './SettingArea/SettingArea'
import s from "./header.module.css"

const Header = (props) => {
    return (
        <header className={s.header}>
            <Logo/>
            <Menu/>
            <SettingArea {...props}/>

        </header>
    )
}

export default Header