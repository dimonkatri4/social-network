import React from 'react'
import s from "./friend.module.css"


    const Friend =(props) => {
    return (
        <div>
            <a className={s.friend} href="/">
                <img className={s.ava} src={props.img} alt="" />
                <div className={s.signature}> {props.name} {props.surname} </div>
            </a>
        </div>
    )
}

export default Friend