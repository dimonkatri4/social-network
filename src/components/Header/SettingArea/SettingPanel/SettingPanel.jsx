import React from 'react'
import s from "./settingPanel.module.css"

const SettingPanel = () => {
    return (
        <div className={`${s.setting_panel} setting_panel`}>
            <div><a href="/"><img src="images/search.png" alt="search" /></a> </div>
            <div><a href="/"><img src="images/home.png" alt="home" /></a> </div>
            <div><a href="/"><img src="images/bell.png" alt="bell" /></a> </div>
            <div><a href="/"><img src="images/message.png" alt="message" /></a> </div>
            <div><a href="/"><img src="images/world.png" alt="world" /></a> </div>
        </div>
    )
}

export default SettingPanel