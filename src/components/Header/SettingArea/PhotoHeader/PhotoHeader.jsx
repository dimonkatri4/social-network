import React, {useState} from 'react'
import s from "./photoHeader.module.css"
import photoUser from '../../../../images/photo-user.jpg'
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faUserEdit, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'


const PhotoHeader = (props) => {

    let [editMode, setEditMode] = useState(false);


    return (
        <div className={s.photo_header} >
            <img src={photoUser} alt="user" onClick={() => setEditMode(!editMode)}
                 />
            <div>{props.isAuth && props.login}</div>
            {editMode &&
            <div className={classNames(s.userSettings)} onClick={() => setEditMode(false)}>
                <ul>
                    <li className={s.itemMenu}>
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faUserCircle} className={s.icon}/>
                            View Profile
                        </NavLink>
                    </li>
                    <li className={s.itemMenu}>
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faUserEdit} className={s.icon}/>
                            Edit Profile
                        </NavLink>
                    </li>
                    <li className={s.itemMenu}>
                        <NavLink to='/'>
                            <FontAwesomeIcon icon={faCog} className={s.icon}/>
                            Account Setting
                        </NavLink>
                    </li>
                    <li className={s.itemMenu} onClick={props.logout}>
                        <NavLink to='/login'>
                            <FontAwesomeIcon icon={faSignOutAlt} className={s.icon} />
                            Log Out
                        </NavLink>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default PhotoHeader