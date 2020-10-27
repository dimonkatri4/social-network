import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"

const Profile = () => {
    return (
        <div className={s.content}>
            <CreatePost/>
            <MyPosts/>
        </div>
    )
}

export default Profile