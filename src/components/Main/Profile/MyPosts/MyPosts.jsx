import React from 'react'
import Post from '../Post/Post'

const MyPosts = (props) => {



    let postElement = props.postsData
        .map( post => <Post message={post.message} likeCount={post.likeCount} />)

    return (
        <div className="profile_block">
            {postElement}
        </div>
    )
}

export default MyPosts