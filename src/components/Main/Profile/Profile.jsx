import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className={s.content}>
            <CreatePost/>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile