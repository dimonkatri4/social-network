import React from "react";
import {NavLink} from "react-router-dom";
import style from "./user.module.css";
import classNames from "classnames";

const User = ({followingInProgress, user, follow, unfollow,scrollToMainPhoto}) => {
    return <div>
        <div className={style.userBlock}>
            <div className={style.userPhoto} ><NavLink to={'/profile/' + user.id} onClick={scrollToMainPhoto}> <img
                src={user.photos.small !== null ? user.photos.small : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'}
                alt="" className={style.ava}/></NavLink></div>
            <div className={style.dataUser}>
                <div className={style.nameUser}><NavLink to={'/profile/' + user.id}>{user.name}</NavLink></div>
                <div className={style.statusUser}>{user.status}</div>
            </div>
            <div className={style.btn}>
                <button className={classNames('button', style.followBtn)} disabled={user.followed || followingInProgress.some(id => id === user.id)} onClick={() => {
                    follow(user.id)}}>Follow
                </button></div>
                <button className={classNames('button', style.unfollowBtn)}  disabled={!user.followed || followingInProgress.some(id => id === user.id)} onClick={() => {
                    unfollow(user.id)}}>Unfollow
                </button>
        </div>
    </div>
}

export default User