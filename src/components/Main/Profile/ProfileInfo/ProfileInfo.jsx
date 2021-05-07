import React from "react";
import style from "./profileInfo.module.css"
import classNames from "classnames";
import Preloader from "../../../common/Preloader/Preloader";
import {faInstagram} from '@fortawesome/free-solid-svg-icons'

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
        {props.profile.lookingForAJobDescription && <div>Description job: {props.profile.lookingForAJobDescription}</div>}
        {Object.keys(props.profile.contacts).map((key)=> {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}  />
        })}
    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div>
        {contactValue && <div><b>{contactTitle}</b>: {contactValue}</div>}
    </div>
}

export default ProfileInfo