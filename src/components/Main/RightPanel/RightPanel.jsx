import React from 'react'
import {Route} from 'react-router-dom'
import s from "./rightPanel.module.css"
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import Sidebar from "./Sidebar/Sidebar";
import SidebarContainer from "./Sidebar/SidebarContainer";

const RightPanel = (props) => {
    return (
        <div className={s.rightPanel}>
            <Route path='/profile/:userId?' render={() =>
                    <ProfileInfo profile={props.profile} isAuth={props.isAuth} getProfileDataRef={props.getProfileDataRef}/>
            }/>
            <SidebarContainer/>
        </div>
    )
}

export default RightPanel