import React from 'react'
import Post from '../Post/Post'

const MyPosts = React.memo((props) => {
    console.log("MYPOST");

    let postElement = props.posts
        .map(post => <Post
            message={post.message}
            likeCount={post.likeCount}
            userName={post.userName}
            commentsCount={post.commentsCount}
            viewsCount={post.viewsCount}
            shareCount={post.shareCount}
            date={post.date}
            key={post.id}
        />)

    return (
        <div>
            {postElement}
        </div>
    )
});

export default MyPosts