import React from 'react'
import s from "./mainPhoto.module.css"

const MainPhoto = (props) => {
    return (
        <div className={s.main_photo}>
            <img src={props.photo.large} alt=""/>
        </div>
    )
}

export default MainPhoto