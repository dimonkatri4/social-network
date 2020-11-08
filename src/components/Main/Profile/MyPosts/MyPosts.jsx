import React from 'react'
import Post from '../Post/Post'

const MyPosts = () => {

    let postsData = [
        {id:1, message:'Hi, how are you?', likeCount: 10},
        {id:2, message:'It\'s my first post', likeCount: 5},
        {id:3, message:'Helo!', likeCount: 7}
    ]

    let postElement = postsData
        .map( post => <Post message={post.message} likeCount={post.likeCount} />)

    return (
        <div className="profile_block">
            {postElement}
        </div>
    )
}

export default MyPosts