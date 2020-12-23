import React from 'react'
import s from "./createPost.module.css"


const CreatePost = (props) => {
    let newPostElement = React.createRef();
    let addText = () => {
        props.addPost() ;
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text);
    }

    return (
        <div className={`${s.profile_block} profile_block`} >
            <div className={s.create_post}>
                <img className={s.ava} src='images/photo-user.jpg' alt="avatar" />
                <textarea ref={newPostElement}
                    rows="8"
                    value={props.newPostText}
                    placeholder="write something"
                    onChange={onPostChange} />
                <div className={s.panel}>
                    <a href="/"><img src="images/icons/music.png" alt="music" /></a>
                    <a href="/"><img src="images/icons/picture.png" alt="picture_icon" /></a>
                    <a href="/"><img src="images/icons/video-camera.png" alt="video-camera" /></a>
                    <a href="/"><img src="images/icons/photo-camera.png" alt="photo_camera" /></a>
                    <button className='button' onClick={addText}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost