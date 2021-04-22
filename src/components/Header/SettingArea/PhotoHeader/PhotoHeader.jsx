import React from 'react'
import s from "./photoHeader.module.css"
import photoUser from '../../../../images/photo-user.jpg'
import {NavLink} from "react-router-dom";


const PhotoHeader = (props) => {
    return (
        <div className={s.photo_header}>
            <img src={photoUser} alt="user" />
            <div>{props.isAuth && props.login}</div>
            <div className={s.userSettings}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </div>
        </div>
    )
}

export default PhotoHeader