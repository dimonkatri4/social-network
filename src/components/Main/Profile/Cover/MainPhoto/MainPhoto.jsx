import React, {useEffect, useRef} from 'react'
import s from "./mainPhoto.module.css"
import photoUser from '../../../../../images/photo-user.jpg'
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const MainPhoto = (props) => {

    const mainPhotoRef = useRef(null);
    useEffect(() => {
        props.getMainPhotoRef(mainPhotoRef);
    },[])

    const updatePhoto = (e) => {
       if( e.target.files.length !== 0) {
           props.savePhoto(e.target.files[0])
    }
    }

    return (
        <div className={s.photoBlock} ref={mainPhotoRef}>
            <div className={s.main_photo}>
                <img src={props.photo.large || photoUser} alt=""/>
            </div>
            {props.isOwner && <div className={s.inputWrapper}>
                <input type="file" accept="image/*" id="inputPhoto" onChange={updatePhoto} className={s.inputTag}/>
                <label htmlFor="inputPhoto" className={s.inputPhoto}><FontAwesomeIcon icon={faCamera}/></label>
            </div>}
        </div>
    )
}

export default MainPhoto