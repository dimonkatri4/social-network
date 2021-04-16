import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import Cover from "./Cover/Cover";

const Profile = (props) => {
    // if(!props.isAuth) return <Redirect to='/login'/>

    return ( <>
            <Cover profile={props.profilePage.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner = {props.isOwner}
                   savePhoto = {props.savePhoto}
            />
        <div className={s.content}>
            <CreatePostContainer/>
            <MyPosts posts={props.profilePage.posts} />
        </div>
        </>
    )
}

export default Profile