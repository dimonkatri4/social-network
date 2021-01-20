import React from 'react'
import s from './post.module.css'
import photoUser from '../../../../images/photo-user.jpg'
import likeIcon from '../../../../images/icons/love.png'
import eyeIcon from '../../../../images/icons/eye.png'
import commentsIcon from '../../../../images/icons/comments.png'
import shareIcon from '../../../../images/icons/share.png'

const Post = (props) => {
    return (
        <div className={`${s.item} profile_block`}>
            <div className={s.caption}>
                <img src={photoUser} alt="user" />
                <div className={s.userName}>{props.userName}</div>
                <div className={s.date}>Published: {props.date}</div>
            </div>
            <div className={s.message}>{props.message}</div>
            <div className={s.post_panel}>
                <ul>
                    <li>
                        <div className={s.like}><img src={likeIcon} alt="like" /></div>
                        <span className={s.likeCount}>{props.likeCount}</span>
                    </li>
                    <li>
                        <div><img src={eyeIcon} alt="eye" /></div>
                        <span >{props.viewsCount}</span>
                    </li>
                    <li>
                        <div><img src={commentsIcon} alt="comments" /></div>
                        <span >{props.commentsCount}</span>
                    </li>
                    <li>
                        <div className={s.share}><img src={shareIcon} alt="share" /></div>
                        <span >{props.shareCount}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post