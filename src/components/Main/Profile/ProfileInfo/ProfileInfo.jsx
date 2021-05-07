import React from "react";
import style from "./profileInfo.module.css"
import classNames from "classnames";
import {faInstagram, faFacebookSquare,faGithubSquare,faTwitterSquare, faVk, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faLink, faGlobeAmericas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
        <div className={style.contacts}>
        {Object.keys(props.profile.contacts).map((key)=> {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}  />
        })}
        </div>
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

export default ProfileInfo