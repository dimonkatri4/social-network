import React from 'react'
import PhotoHeader from './PhotoHeader/PhotoHeader'
import SettingPanel from './SettingPanel/SettingPanel'
import s from "./settingArea.module.css"

const SettingArea = () => {
    return (
        <div className={`${s.setting_area} setting_area`}>
            <SettingPanel/>
            <PhotoHeader/>
        </div>
    )
}

export default SettingArea