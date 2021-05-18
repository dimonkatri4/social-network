import React from 'react'
import PhotoHeader from './PhotoHeader/PhotoHeader'
import SettingPanel from './SettingPanel/SettingPanel'
import s from "./settingArea.module.css"
import {logout} from "../../../redux/auth-reducer";
import {connect} from "react-redux";

const SettingArea = (props) => {
    return (
        <div className={`${s.setting_area} setting_area`}>
            <SettingPanel/>
            {/*{props.isAuth && <button onClick={props.logout}>Logout</button>}*/}
            { props.profileOwner ? <PhotoHeader {...props} /> : <div></div>}
        </div>
    )
}

export default connect(null,{logout})(SettingArea)