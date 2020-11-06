import React from 'react'
import Post from '../Post/Post'

const MyPosts = () => {

    let postsData = [
        {id:1, message:'Hi, how are you?', likeCount: 10},
        {id:2, message:'It\'s my first post', likeCount: 5}
    ]

    return (
        <div className="profile_block">
            <Post message={postsData[0].message} likeCount={postsData[0].likeCount} />
            <Post message={postsData[1].message} likeCount={postsData[1].likeCount} />
        </div>
    )
}

export default MyPosts