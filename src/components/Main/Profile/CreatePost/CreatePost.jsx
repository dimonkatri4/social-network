import React from 'react'
import s from "./createPost.module.css"
import photoUser from '../../../../images/photo-user.jpg'
import musicIcon from '../../../../images/icons/music.png'
import pictureIcon from '../../../../images/icons/picture.png'
import videoIcon from '../../../../images/icons/video-camera.png'
import photoIcon from '../../../../images/icons/photo-camera.png'



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
                <img className={s.ava} src={photoUser} alt="avatar" />
                <textarea ref={newPostElement}
                    rows="8"
                    value={props.newPostText}
                    placeholder="write something"
                    onChange={onPostChange} />
                <div className={s.panel}>
                    <a href="/"><img src={musicIcon} alt="music" /></a>
                    <a href="/"><img src={pictureIcon} alt="picture_icon" /></a>
                    <a href="/"><img src={videoIcon} alt="video-camera" /></a>
                    <a href="/"><img src={photoIcon} alt="photo_camera" /></a>
                    <button className='button' onClick={addText}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost