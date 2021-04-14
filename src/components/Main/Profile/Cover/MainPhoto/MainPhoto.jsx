import React from 'react'
import s from "./mainPhoto.module.css"
import photoUser from '../../../../../images/photo-user.jpg'

const MainPhoto = (props) => {

    const updatePhoto = (e) = {
       if( e.files.length !== 0) {
           props.savePhoto(e.files[0])
    }
    }

    return (
        <div>
            <div className={s.main_photo}>
                <img src={props.photo.large || photoUser} alt=""/>
            </div>
            <input type="file" className={s.inputPhoto} onChange={}/>
        </div>
    )
}

export default MainPhoto