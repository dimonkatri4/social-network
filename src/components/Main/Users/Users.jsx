import React from "react";
import s from "./users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697',
                    followed: true,
                    fullName: 'cat griffith',
                    status: 'i`m fine',
                    location: {city: 'Kyiv', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697',
                    followed: true,
                    fullName: 'cat Dima',
                    status: 'i`m fine, too',
                    location: {city: 'Kyiv', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697',
                    followed: false,
                    fullName: 'cat Liuda',
                    status: 'i`m fine,too too',
                    location: {city: 'Kyiv', country: 'Ukraine'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div>
                    <div><img src={u.photoUrl} alt="" className={s.ava}/></div>
                    <div>{u.followed ?
                        <button onClick={() => props.unfollow(u.id)}>Follow</button> :
                        <button onClick={() => props.follow(u.id)}>Unfollow</button>}</div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users