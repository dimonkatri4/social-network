import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pageNumber = Math.ceil(props.totalUsersCount/props.pageSize);

    let pageCount = [];

    for (let i=1; i<=20; i++ ) {
        pageCount.push(i)
    }
    return (
        <div className="profile_block">
            <div className={s.pageCount}>
                {pageCount.map(p => <span className={props.currentPage === p && s.current}
                                          onClick={(event) => {props.onPageChanged(p)} }
                >{p}</span>)}
            </div>
            {
                props.users.map(u => <div>
                    <div><NavLink to={'/profile/'+ u.id} > <img
                        src={u.photos.small !== null ? u.photos.small : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'}
                        alt="" className={s.ava}/></NavLink></div>
                    <div>{u.followed ?
                        <button onClick={() => props.unfollow(u.id)}>Follow</button> :
                        <button onClick={() => props.follow(u.id)}>Unfollow</button>}</div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>
                        <div>"u.location.city"</div>
                        <div>"u.location.country"</div>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users