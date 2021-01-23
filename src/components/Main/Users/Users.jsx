import React from "react";
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {
    let pageNumber = Math.ceil(props.totalUsersCount / props.pageSize);

    let pageCount = [];

    for (let i = 1; i <= 20; i++) {
        pageCount.push(i)
    }
    return (
        <div className="profile_block">
            <div className={s.pageCount}>
                {pageCount.map(p => <span className={props.currentPage === p && s.current}
                                          onClick={(event) => {
                                              props.onPageChanged(p)
                                          }}
                >{p}</span>)}
            </div>
            {
                props.users.map(u => <div>
                    <div><NavLink to={'/profile/' + u.id}> <img
                        src={u.photos.small !== null ? u.photos.small : 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'}
                        alt="" className={s.ava}/></NavLink></div>
                    <div>{u.followed ?
                        <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "100135da-520e-4d3e-bbd2-c947ccf46727"
                                    }
                                }
                            ).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id)
                                }
                            })
                        }
                        }>Unfollow</button> :
                        <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "100135da-520e-4d3e-bbd2-c947ccf46727"
                                    }
                                }
                            ).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id)
                                }
                            })
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