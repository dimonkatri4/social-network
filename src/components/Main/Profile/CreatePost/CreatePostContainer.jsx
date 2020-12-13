import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../../redux/profile-reducer';
import CreatePost from "./CreatePost";
import StoreContent from "../../../../StoreContext";


const CreatePostContainer = (props) => {

    return <StoreContent.Consumer>
        {(store) => {
            let state = store.getState();
            let addText = () => {
                store.dispatch(addPostActionCreator());
            }
            let onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }
            return (
                <CreatePost addPost={addText} updateNewPost={onPostChange} newPostText={state.profilePage.newPostText}/>
            )
        }
        }
    </StoreContent.Consumer>
}

export default CreatePostContainer