import React from 'react'
import s from "./settingPanel.module.css"

const SettingPanel = () => {
    return (
        <div className={`${s.setting_panel} setting_panel`}>
            <div><a href="/"><img src="images/search.png" /></a> </div>
            <div><a href="/"><img src="images/home.png" /></a> </div>
            <div><a href="/"><img src="images/bell.png" /></a> </div>
            <div><a href="/"><img src="images/message.png" /></a> </div>
            <div><a href="/"><img src="images/world.png" /></a> </div>
        </div>
    )
}

export default SettingPanel