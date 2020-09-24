import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import SettingArea from './SettingArea/SettingArea'

const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <Menu/>
            <SettingArea/>
        </header>
    )
}

export default Header