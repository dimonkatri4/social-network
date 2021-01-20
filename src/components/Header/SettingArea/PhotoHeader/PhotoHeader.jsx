import React from 'react'
import s from "./photoHeader.module.css"
import photoUser from '../../../../images/photo-user.jpg'

const PhotoHeader = () => {
    return (
        <div className={s.photo_header}>
            <img src={photoUser} alt="user" />
        </div>
    )
}

export default PhotoHeader