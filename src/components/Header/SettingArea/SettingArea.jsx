import React from 'react'
import PhotoHeader from './PhotoHeader'
import SettingPanel from './SettingPanel'

const SettingArea = () => {
    return (
        <div className="setting-area">
            <SettingPanel/>
            <PhotoHeader/>
        </div>
    )
}

export default SettingArea