import React from "react";
import style from "./profileInfo.module.css"
import classNames from "classnames";
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <div></div>
    }
    return <div className={classNames(style.profileInfo, 'profile_block')}>
        <div className="caption">
            <h3 className="title">Profile Info</h3>
        </div>
        <div>
            About Me: {props.profile.aboutMe}
        </div>
        <div>
            Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No" }
        </div>
        {props.profile.lookingForAJob && <div>Description job: {props.profile.lookingForAJobDescription}</div>}
    </div>

}

export default ProfileInfo