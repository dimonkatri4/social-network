import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import SettingArea from './SettingArea/SettingArea'
import s from "./header.module.css"
import SignIn from "./SignIn/SignIn";
import SearchBar from "./SearchBar/SearchBar";

const Header = (props) => {
    return (
        <header className={s.header}>
            <Logo/>
            {props.isAuth ? <Menu scrollToProfileEdit={props.scrollToProfileEdit}/> : <SearchBar/> }
            {props.isAuth ? <SettingArea {...props}/> : <SignIn/> }
        </header>
    )
}

export default Header