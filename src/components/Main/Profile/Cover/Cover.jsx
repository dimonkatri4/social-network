import React from 'react'
import CoverInfo from './CoverInfo/CoverInfo'
import CoverPhoto from './CoverPhoto/CoverPhoto'
import MainPhoto from './MainPhoto/MainPhoto'
import s from "./cover.module.css"
import Preloader from "../../../common/Preloader/Preloader";

const Cover = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.cover}>
            <CoverPhoto/>
            <MainPhoto photo = {props.profile.photos}
                       isOwner={props.isOwner}
                       savePhoto={props.savePhoto}
                       getMainPhotoRef={props.getMainPhotoRef}
                       setActive={props.setActive}
            />
            <CoverInfo fullName={props.profile.fullName}
                       status={props.status}
                       updateStatus={props.updateStatus}
                       isOwner={props.isOwner}
                       errorInStatus={props.errorInStatus}
                       setErrorInStatus={props.setErrorInStatus}
            />
        </div>
    )
}

export default Cover