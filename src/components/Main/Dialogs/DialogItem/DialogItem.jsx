import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './dialogItem.module.css'

const DialogItem = (props) => {
    let path = "/dialog/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <div className={s.photo_user}>
                    <img src={props.img} alt="" />
                </div>
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogItem