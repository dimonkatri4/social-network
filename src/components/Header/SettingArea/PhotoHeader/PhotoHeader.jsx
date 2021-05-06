import React, {useEffect, useRef, useState} from 'react'
import s from "./photoHeader.module.css"
import photoUser from '../../../../images/photo-user.jpg'
import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faUserEdit, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

const PhotoHeader = (props) => {

    let [clickedInside, setClickedInside] = useState(false);

    /**
     * Hook that edit state clicks outside of the passed ref
     */
    const useOutsideClick = (ref) => {
        useEffect(() => {
            /**
             * Edit state if clicked on outside of element
             */
            const handleClickOutside = e => {
                if (!ref.current.contains(e.target)) {
                    setClickedInside(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);
    return (
        <div ref={wrapperRef} className={s.photo_header}>
            <img src={photoUser} alt="user" onClick={() => setClickedInside(!clickedInside)}
            />
            <div>{props.isAuth && props.login}</div>
            {clickedInside &&
            <div className={classNames(s.userSettings)} onClick={() => setClickedInside(false)}>
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
                            <FontAwesomeIcon icon={faSignOutAlt} className={s.icon}/>
                            Log Out
                        </NavLink>
                    </li>
                </ul>
            </div>}
        </div>
    )
}

export default PhotoHeader