import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"

const Profile = () => {
    let postsData = [
        {id:1, message:'Hi, how are you?', likeCount: 10},
        {id:2, message:'It\'s my first post', likeCount: 5},
        {id:3, message:'Helo!', likeCount: 7}
    ]
    return (
        <div className={s.content}>
            <CreatePost/>
            <MyPosts postsData={postsData} />
        </div>
    )
}

export default Profile