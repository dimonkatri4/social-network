import React from 'react'
import Post from '../Post/Post'

const MyPosts = () => {
    return (
        <div>
            <div>
                My post
                <div>
                    New post
                </div>
            </div>
            <div>
                <Post message='Hi, how are you?' like='3' />
                <Post message = "It's my first post" like='10' />
            </div>
        </div>
    )
}

export default MyPosts