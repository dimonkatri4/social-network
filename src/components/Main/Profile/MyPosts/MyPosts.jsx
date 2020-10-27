import React from 'react'
import Post from '../Post/Post'

const MyPosts = () => {
    return (
        <div className="profile_block">
            <Post message='Hi, how are you?' like='3' />
            <Post message="It's my first post" like='10' />
        </div>
    )
}

export default MyPosts