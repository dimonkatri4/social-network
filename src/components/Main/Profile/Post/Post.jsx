import React from 'react'
import s from './post.module.css'
import photoUser from '../../../../images/photo-user.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from "classnames";

const Post = (props) => {

    const changeLike = () => {
        props.changeIsLiked(!props.isLiked,props.id);
    }

    return (
        <div className={`${s.item} profile_block`}>
            <div className={s.caption}>
                <img src={props.photo} alt="userPhoto" />
                <div className={s.userName}>{props.userName}</div>
                <div className={s.date}>Published: {props.date}</div>
            </div>
            <div className={s.message}>{props.message}</div>
            <div className={s.post_panel}>
                <ul>
                    <li>
                        <div className={classNames(s.like, s.panelIcon)} onClick={changeLike}>
                            <FontAwesomeIcon icon={props.isLiked ? ["fas","heart"] : ["far","heart"]}/>
                        </div>
                        <span>{props.likeCount}</span>
                    </li>
                    <li>
                        <div className={s.panelIcon}><FontAwesomeIcon icon={["far","eye"]}/></div>
                        <span >{props.viewsCount}</span>
                    </li>
                    <li>
                        <div className={s.panelIcon}><FontAwesomeIcon icon={["far","comment"]}/></div>
                        <span >{props.commentsCount}</span>
                    </li>
                    <li>
                        <div className={classNames(s.share,s.panelIcon)}><FontAwesomeIcon icon={["far","share-square"]}/></div>
                        <span >{props.shareCount}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post