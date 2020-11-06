import React from 'react'
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='images/photo-user.jpg' />
            <span>{props.message}</span>
            <div>like {props.likeCount}</div>
        </div>
    )
}

export default Post