import React from 'react'
import s from "./photoHeader.module.css"

const PhotoHeader = () => {
    return (
        <div className={s.photo_header}>
            <img src="images/photo-user.jpg" />
        </div>
    )
}

export default PhotoHeader