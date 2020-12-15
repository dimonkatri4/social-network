import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"
import CreatePostContainer from "./CreatePost/CreatePostContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <CreatePostContainer store = {props.store} />
            <MyPosts posts={props.profilePage.posts} />
        </div>
    )
}

export default Profile