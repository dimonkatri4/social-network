import React from 'react'
import s from './message.module.css'


const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.user_photo}>
                <img src="images/photo-user.jpg" alt=""/>
            </div>
            <div className={s.triangle}></div> 
            <div className={s.text}>{props.message}</div>
            
        </div>
    )
}

export default Message