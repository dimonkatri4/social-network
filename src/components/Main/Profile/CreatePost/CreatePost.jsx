import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/state';
import s from "./createPost.module.css"


const CreatePost = (props) => {

    let newPostElement = React.createRef();
    let addText = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={`${s.profile_block} profile_block`} >
            <div className={s.create_post}>
                <img className={s.ava} src='images/photo-user.jpg' />
                <textarea ref={newPostElement}
                    rows="8"
                    value={props.newPostText}
                    placeholder="write something"
                    onChange={onPostChange} />
                <div className={s.panel}>
                    <a href="/"><img src="images/icons/music.png" /></a>
                    <a href="/"><img src="images/icons/picture.png" /></a>
                    <a href="/"><img src="images/icons/video-camera.png" /></a>
                    <a href="/"><img src="images/icons/photo-camera.png" /></a>
                    <button className='button' onClick={addText}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost