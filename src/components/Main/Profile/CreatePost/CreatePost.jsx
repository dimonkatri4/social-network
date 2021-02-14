import React from 'react'
import s from "./createPost.module.css"
import photoUser from '../../../../images/photo-user.jpg'
import musicIcon from '../../../../images/icons/music.png'
import pictureIcon from '../../../../images/icons/picture.png'
import videoIcon from '../../../../images/icons/video-camera.png'
import photoIcon from '../../../../images/icons/photo-camera.png'
import {Field, reduxForm} from "redux-form";

const PostForm = (props) => {
    return  <form onSubmit={props.handleSubmit}  >
        <Field
            component={'textarea'}
            name={'messageText'}
            rows="8"
            placeholder="write something"/>
        <div className={s.panel}>
            <a href="/"><img src={musicIcon} alt="music" /></a>
            <a href="/"><img src={pictureIcon} alt="picture_icon" /></a>
            <a href="/"><img src={videoIcon} alt="video-camera" /></a>
            <a href="/"><img src={photoIcon} alt="photo_camera" /></a>
            <button className='button'>Publish</button>
        </div>
    </form>
}

const PostFormRedux = reduxForm({form:'post'})(PostForm)

const CreatePost = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.messageText)
    }
    return (
        <div className={`${s.profile_block} profile_block`} >
            <div className={s.create_post}>
                <img className={s.ava} src={photoUser} alt="avatar" />
                <PostFormRedux onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default CreatePost