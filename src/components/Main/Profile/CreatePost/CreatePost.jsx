import React from 'react'
import s from "./createPost.module.css"

const CreatePost = () => {
    return (
        <div className={`${s.profile_block} profile_block`} >
            <div className={s.create_post}>
                <img className={s.ava} src='images/photo-user.jpg' />
                <textarea rows="8" placeholder="write something"></textarea>
                <div className={s.panel}>
                    <a href="/"><img src="images/icons/music.png" /></a>
                    <a href="/"><img src="images/icons/picture.png"/></a>
                    <a href="/"><img src="images/icons/video-camera.png"/></a>
                    <a href="/"><img src="images/icons/photo-camera.png"/></a>
                    <button className='button'>Publish</button>
                </div>
            </div>
        </div>
    )
}

export default CreatePost