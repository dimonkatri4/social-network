import React, {useEffect, useRef} from "react";
import style from "./profileInfo.module.css"
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    const profileDataRef = useRef(null);


    useEffect(() => {
        props.getProfileDataRef(profileDataRef)
    }, [])

    const onSubmit = (formData) => {
        props.updateProfileInfo(formData);
        //setEditMode(false)
    }

    const isOwner = !props.match.params.userId;

    const goToEditMode = () => {
        props.changeEditModeProfile(true)
    }

    if (!props.profile) {
        return <div></div>
    }
    return <div className={classNames(style.profileInfo, 'profile_block')} ref={profileDataRef}>
        <div className="caption">
            <h3 className="title">Profile Info</h3>
        </div>
        {props.editModeProfile ? <ProfileDataForm onSubmit={onSubmit}
                                                  exitToEditMode={() => props.changeEditModeProfile(false)}
                                                  profile={props.profile}
                                                  initialValues={props.profile}
            /> :
            <ProfileData {...props} isOwner={isOwner} goToEditMode={goToEditMode}/>}
    </div>
}

const ProfileData = (props) => {
    return <div>
        <div className={style.profileInfoTitle}>
            About Me: <span className={style.profileInfoValue}>{props.profile.aboutMe}</span>
        </div>
        <div className={style.profileInfoTitle}>
            Looking for a job:
            <span className={style.profileInfoValue}>{props.profile.lookingForAJob ? "Yes" : "No"}</span>
        </div>
        {props.profile.lookingForAJobDescription &&
        <div className={style.profileInfoTitle}>Description job:
            <span className={style.profileInfoValue}>{props.profile.lookingForAJobDescription}</span></div>}
        <div className={style.contacts}>
            {
                Object.keys(props.profile.contacts).map((key) => {
                    return props.profile.contacts[key] &&
                        <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
        </div>
        {props.isOwner && <div className={style.editButton}>
            <button className="button" onClick={props.goToEditMode}>Edit Profile</button>
        </div>}
    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    const contactsIcon = {
        facebook: ["fab", "facebook-square"],
        github: ["fab", "github-square"],
        instagram: ["fab", "instagram"],
        mainLink: ["fas", "link"],
        twitter: ["fab", "twitter-square"],
        vk: ["fab", "vk"],
        website: ["fas", "globe-americas"],
        youtube: ["fab", "youtube"]
    }
    return <div className={style.contact}>
        {contactValue && <div><a className={style.contactIcon} href={contactValue} title={contactTitle} target="_blank">
            <FontAwesomeIcon icon={contactsIcon[contactTitle]}/>
        </a></div>}
    </div>
}

export default ProfileInfo