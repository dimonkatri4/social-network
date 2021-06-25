import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import s from "./profile.module.css"
import CreatePostContainer from "./CreatePost/CreatePostContainer";
import Cover from "./Cover/Cover";
import {Redirect} from "react-router-dom";
import {setErrorInStatus} from "../../../redux/profile-reducer";

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
            />
        <div className={s.content}>
            <CreatePostContainer/>
            <MyPosts posts={props.profilePage.posts} />
        </div>
        </>
    )
}

export default Profile