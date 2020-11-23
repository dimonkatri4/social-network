import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"

const Profile = (props) => {
    
    return (
        <div className={s.content}>
            <CreatePost addPost={props.addPost}
                newPostText={props.state.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            <MyPosts posts={props.state.profilePage.posts} />
        </div>
    )
}

export default Profile