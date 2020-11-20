import React from 'react'
import s from './post.module.css'

const Post = (props) => {
    return (
        <div className={`${s.item} profile_block`}>
            <div className={s.caption}>
                <img src='images/photo-user.jpg' />
                <div className={s.userName}>{props.userName}</div>
                <div className={s.date}>Published: {props.date}</div>
            </div>
            <div className={s.message}>{props.message}</div>
            <div className={s.post_panel}>
                <ul>
                    <li>
                        <div className={s.like}><img src="images/icons/love.png" alt="" /></div>
                        <span className={s.likeCount}>{props.likeCount}</span>
                    </li>
                    <li>
                        <div><img src="images/icons/eye.png" alt="" /></div>
                        <span >{props.viewsCount}</span>
                    </li>
                    <li>
                        <div><img src="images/icons/comments.png" alt="" /></div>
                        <span >{props.commentsCount}</span>
                    </li>
                    <li>
                        <div className={s.share}><img src="images/icons/share.png" alt="" /></div>
                        <span >{props.shareCount}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post