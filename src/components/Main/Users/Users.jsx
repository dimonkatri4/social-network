import React from "react";
import style from "./users.module.css";
import {NavLink} from "react-router-dom";
import Pagination from "../../common/Pagination/Pagination";

let Users = ({totalUsersCount,pageSize,currentPage,onPageChanged,follow,unfollow,...props}) => {
    return (
        <div className="profile_block">
            <Pagination
                currentPage={currentPage}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
            />
            {
                props.users.map(u => <div>
                    <div><NavLink to={'/profile/' + u.id}> <img
                        src={u.photos.small !== null ? u.photos.small : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'}
                        alt="" className={style.ava}/></NavLink></div>
                    <div>{u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => {
                            unfollow(u.id)
                        }
                        }>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => {
                            follow(u.id)
                        }
                        }>Follow</button>}</div>
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