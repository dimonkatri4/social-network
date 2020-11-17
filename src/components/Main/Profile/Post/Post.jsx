import React from 'react'
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={`${s.item} profile_block`}>
            <div className={s.caption}>
                <img src='images/photo-user.jpg' />
                <div>Name</div>
                <div>Data</div>
            </div>
            <span>{props.message}</span>
            <div>like {props.likeCount}</div>
        </div>
    )
}

export default Post