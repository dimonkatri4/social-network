import React from 'react'
import s from './message.module.css'
import photoUser from '../../../../images/photo-user.jpg'


const Message = (props) => {


    return (
        <div className={s.message}>
            <div className={s.user_photo}>
                <img src={photoUser} alt=""/>
            </div>
            <div className={s.triangle}></div> 
            <div className={s.text}>{props.message}</div>
            
        </div>
    )
}

export default Message