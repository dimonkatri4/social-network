import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"

const Profile = (props) => {

    return (
        <div className={s.content}>
            <CreatePost addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            <MyPosts posts={props.profilePage.posts} />
        </div>
    )
}

export default Profile