import React from 'react'
import s from "./createPost.module.css"

const CreatePost = (props) => {

    let newPostElement = React.createRef();
    let addText =() => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ""
    }

    return (
        <div className={`${s.profile_block} profile_block`} >
            <div className={s.create_post}>
                <img className={s.ava} src='images/photo-user.jpg' />
                <textarea ref={newPostElement} rows="8" placeholder="write something"></textarea>
                <div className={s.panel}>
                    <a href="/"><img src="images/icons/music.png" /></a>
                    <a href="/"><img src="images/icons/picture.png"/></a>
                    <a href="/"><img src="images/icons/video-camera.png"/></a>
                    <a href="/"><img src="images/icons/photo-camera.png"/></a>
                    <button className='button' onClick={addText}>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost