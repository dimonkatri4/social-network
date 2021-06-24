import React, {useRef, useState} from "react";
import style from "./profileInfo.module.css"
import classNames from "classnames";
import {
    faInstagram,
    faFacebookSquare,
    faGithubSquare,
    faTwitterSquare,
    faVk,
    faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {faLink, faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {withRouter} from "react-router-dom";
import ProfileDataForm from "./ProfileDataForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeEditModeProfile, updateProfileInfo} from "../../../../redux/profile-reducer";

const ProfileInfo = (props) => {

    const profileDataRef = useRef(null);
    const scrollToTop = () => {
        profileDataRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const onSubmit = (formData) => {
        props.updateProfileInfo(formData);
        //setEditMode(false)
    }

    const isOwner = !props.match.params.userId;

    if (!props.profile) {
        return <div></div>
    }
    return <div className={classNames(style.profileInfo, 'profile_block')}>
        <div className="caption">
            <h3 className="title">Profile Info</h3>
        </div>
        {props.editModeProfile ? <ProfileDataForm onSubmit={onSubmit}
                                     exitToEditMode={() => props.changeEditModeProfile(false)}
                                     profile={props.profile}
                                     initialValues={props.profile}
            /> :
            <ProfileData {...props} isOwner={isOwner}
                         goToEditMode={() => props.changeEditModeProfile(true)} />
        }
    </div>
}

const Contacts = ({contactTitle, contactValue}) => {
    const contactsIcon = {
        facebook: faFacebookSquare,
        github: faGithubSquare,
        instagram: faInstagram,
        mainLink: faLink,
        twitter: faTwitterSquare,
        vk: faVk,
        website: faGlobeAmericas,
        youtube: faYoutube
    }
    return <div className={style.contact}>
        {contactValue && <div><a className={style.contactIcon} href={contactValue} title={contactTitle} target="_blank">
            <FontAwesomeIcon icon={contactsIcon[contactTitle]}/>
        </a></div>}
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

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    editModeProfile: state.profilePage.editModeProfile
})

export default compose(
    withRouter,
    connect(mapStateToProps,{updateProfileInfo,changeEditModeProfile})
)(ProfileInfo)