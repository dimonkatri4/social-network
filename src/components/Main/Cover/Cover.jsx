import React from 'react'
import CoverInfo from './CoverInfo/CoverInfo'
import CoverPhoto from './CoverPhoto/CoverPhoto'
import MainPhoto from './MainPhoto/MainPhoto'
import s from "./cover.module.css"

const Cover = (props) => {
    if(!props.profile) {
        return <div>Loading</div>
    }
    return (
        <div className={s.cover}>
            <CoverPhoto/>
            <MainPhoto photo = {props.profile.photos}/>
            <CoverInfo fullName={props.profile.fullName}/>
        </div>
    )
}

export default Cover