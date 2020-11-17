import React from 'react'
import Post from '../Post/Post'

const MyPosts = (props) => {

    let postElement = props.posts
        .map(post => <Post
            message={post.message}
            likeCount={post.likeCount}
        />)

    return (
        <div>
            {postElement}
        </div>
    )
}

export default MyPosts