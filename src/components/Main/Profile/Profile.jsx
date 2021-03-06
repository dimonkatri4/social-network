import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import Cover from "./Cover/Cover";
import {Redirect} from "react-router-dom";

const Profile = (props) => {
     if(!props.isAuth) return <Redirect to='/login'/>
    return ( <>
            <Cover profile={props.profilePage.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner = {props.isOwner}
                   savePhoto = {props.savePhoto}
                   errorInStatus={props.profilePage.error}
                   setErrorInStatus={props.setErrorInStatus}
                   getMainPhotoRef={props.getMainPhotoRef}
                   setActive={props.setActive}
                   getMainPhotoRef={props.getMainPhotoRef}
            />
        <div className={s.content}>
            <CreatePostContainer/>
            <MyPosts posts={props.profilePage.posts}
                     changeIsLiked={props.changeIsLiked} />
        </div>
        </>
    )
}

export default Profile