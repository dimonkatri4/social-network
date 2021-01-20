    import React from 'react'
import s from "./coverPhoto.module.css"
    import coverPhoto from '../../../../images/cover-photo.jpg'

const CoverPhoto = () => {
    return (
        <div className={s.cover_photo}>
            <img src={coverPhoto} alt=""/>
        </div>
    )
}

export default CoverPhoto