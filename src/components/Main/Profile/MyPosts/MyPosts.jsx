import React from 'react'
import Post from '../Post/Post'

const MyPosts = React.memo((props) => {

    let postElement = props.posts
        .map(post => <Post
            message={post.message}
            likeCount={post.likeCount}
            userName={post.userName}
            commentsCount={post.commentsCount}
            viewsCount={post.viewsCount}
            shareCount={post.shareCount}
            date={post.date}
            isLiked={post.isLiked}
            changeIsLiked={props.changeIsLiked}
        />)

    return (
        <div>
            {postElement}
        </div>
    )
});

export default MyPosts