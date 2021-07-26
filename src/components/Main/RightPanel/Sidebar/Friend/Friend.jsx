import React from 'react'
import s from "./friend.module.css"
import {NavLink} from "react-router-dom";


    const Friend =(props) => {
    return (
        <div>
            <NavLink className={s.friend} to={`/profile/${props.id}`}>
                <img className={s.ava} src={props.img} alt="" />
                <div className={s.signature}> {props.name} {props.surname} </div>
            </NavLink>
        </div>
    )
}

export default Friend