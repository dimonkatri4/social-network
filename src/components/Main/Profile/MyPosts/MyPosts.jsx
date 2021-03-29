import React from 'react'
import Post from '../Post/Post'

class MyPosts extends React.PureComponent {

/*    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    }*/

    render() {

        console.log("MYPOST")

        let postElement = this.props.posts
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
    }
}

export default MyPosts