import React from 'react'
import s from "./createPost.module.css"
import photoUser from '../../../../images/photo-user.jpg'
import musicIcon from '../../../../images/icons/music.png'
import pictureIcon from '../../../../images/icons/picture.png'
import videoIcon from '../../../../images/icons/video-camera.png'
import photoIcon from '../../../../images/icons/photo-camera.png'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";

const maxLength20 = maxLength(20)

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={s.inputText}>
            <Field
                component={Textarea}
                name={'messageText'}
                rows="8"
                placeholder="write something"
                validate={[required, maxLength20]}
            />
            <div className={s.panel}>
                <a href="/"><img src={musicIcon} alt="music"/></a>
                <a href="/"><img src={pictureIcon} alt="picture_icon"/></a>
                <a href="/"><img src={videoIcon} alt="video-camera"/></a>
                <a href="/"><img src={photoIcon} alt="photo_camera"/></a>
                <button className='button'>Publish</button>
            </div>
        </div>
    </form>
}

const PostFormRedux = reduxForm({form: 'createPost'})(PostForm)

const CreatePost = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.messageText)
    }
    return (
        <div className={`${s.profile_block} profile_block`}>
            <div className={s.create_post}>
                <img className={s.ava} src={photoUser} alt="avatar"/>
                <PostFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default CreatePost