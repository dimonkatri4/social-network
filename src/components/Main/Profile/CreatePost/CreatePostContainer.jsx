import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile-reducer';
import CreatePost from "./CreatePost";


const CreatePostContainer = (props) => {

    let state = props.store.getState();

    let addText = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return <CreatePost addPost = {addText} updateNewPost = {onPostChange} newPostText = {state.profilePage.newPostText} />

}

export default CreatePostContainer