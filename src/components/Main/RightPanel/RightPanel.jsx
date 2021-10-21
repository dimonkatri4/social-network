import React from 'react'
import {Route} from 'react-router-dom'
import s from "./rightPanel.module.css"
import SidebarContainer from "./Sidebar/SidebarContainer";
import ProfileInfoContainer from "../Profile/ProfileInfo/ProfileInfoContainer";

const RightPanel = (props) => {
    return (
        <div className={s.rightPanel}>
            <Route path='/profile/:userId?' render={() =>
                    <ProfileInfoContainer getProfileDataRef={props.getProfileDataRef}/>
            }/>
            <SidebarContainer/>
        </div>
    )
}

export default RightPanel