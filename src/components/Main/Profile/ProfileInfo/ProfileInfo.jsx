import React, {useState} from "react";
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
import {updateProfileInfo} from "../../../../redux/profile-reducer";

const ProfileInfo = (props) => {

    const onSubmit = (formData) => {
        props.updateProfileInfo(formData.fullName,formData.aboutMe,formData.lookingForAJob,formData.descriptionJob);
        setEditMode(false)
    }

    let [editMode, setEditMode] = useState(false);

    const isOwner = !props.match.params.userId;

    if (!props.profile) {
        return <div></div>
    }
    return <div className={classNames(style.profileInfo, 'profile_block')}>
        <div className="caption">
            <h3 className="title">Profile Info</h3>
        </div>
        {editMode ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit} /> :
            <ProfileData {...props} isOwner={isOwner} goToEditMode={() => setEditMode(true)} />
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
        {contactValue && <div><a href={contactValue}>
            <FontAwesomeIcon icon={contactsIcon[contactTitle]}/>
        </a></div>}
    </div>
}

const ProfileData = (props) => {
    return <div>
        <div>
            About Me: {props.profile.aboutMe}
        </div>
        <div>
            Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        {props.profile.lookingForAJobDescription &&
        <div>Description job: {props.profile.lookingForAJobDescription}</div>}
        <div className={style.contacts}>
            {
                Object.keys(props.profile.contacts).map((key) => {
                    return props.profile.contacts[key] &&
                        <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                })}
        </div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
    </div>
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})

export default compose(
    withRouter,
    connect(mapStateToProps,{updateProfileInfo})
)(ProfileInfo)