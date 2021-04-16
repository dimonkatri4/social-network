import React from "react";
import {NavLink} from "react-router-dom";
import style from "./users.module.css";

const User = ({followingInProgress, user, follow, unfollow}) => {
    return <div>
        <div><NavLink to={'/profile/' + user.id}> <img
            src={user.photos.small !== null ? user.photos.small : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'}
            alt="" className={style.ava}/></NavLink></div>
        <div>{user.followed ?
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                unfollow(user.id)
            }
            }>Unfollow</button> :
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                follow(user.id)
            }
            }>Follow</button>}</div>
        <div>{user.name}</div>
        <div>{user.status}</div>
        <div>
            <div>"u.location.city"</div>
            <div>"u.location.country"</div>
        </div>
    </div>
}

export default User