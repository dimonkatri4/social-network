import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import PhotoHeader from './PhotoHeader/PhotoHeader'
import SettingArea from './SettingArea/SettingArea'

const Header = () => {
    return (
        <header className='header'>
            <Logo/>
            <Menu/>
            <SettingArea/>
            <PhotoHeader/>
        </header>
    )
}

export default Header