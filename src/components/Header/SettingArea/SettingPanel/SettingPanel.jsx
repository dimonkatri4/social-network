import React from 'react'
import s from "./settingPanel.module.css"
import searchIcon from '../../../../images/search.png'
import homeIcon from '../../../../images/home.png'
import bellIcon from '../../../../images/bell.png'
import messageIcon from '../../../../images/message.png'
import worldIcon from '../../../../images/world.png'



const SettingPanel = () => {
    return (
        <div className={`${s.setting_panel} setting_panel`}>
            <div><a href="/"><img src={searchIcon} alt="search" /></a> </div>
            <div><a href="/"><img src={homeIcon} alt="home" /></a> </div>
            <div><a href="/"><img src={bellIcon} alt="bell" /></a> </div>
            <div><a href="/"><img src={messageIcon} alt="message" /></a> </div>
            <div><a href="/"><img src={worldIcon} alt="world" /></a> </div>
        </div>
    )
}

export default SettingPanel