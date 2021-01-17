import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import Cover from "../Cover/Cover";

const Profile = (props) => {
    return ( <>
            <Cover profile={props.profilePage.profile} />
        <div className={s.content}>
            <CreatePostContainer/>
            <MyPosts posts={props.profilePage.posts} />
        </div>
        </>
    )
}

export default Profile