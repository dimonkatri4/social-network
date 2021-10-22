import React from 'react'
import s from "./createPost.module.css"
import {Field, Form} from "react-final-form";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const maxLength20 = maxLength(20)

const PostForm = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit})=>(
            <form onSubmit={handleSubmit}>
                <div className={s.inputText}>
                    <Field
                        component={Textarea}
                        name={'messageText'}
                        placeholder="write something"
                    />
                    <div className={s.panel}>
                        <span className={s.iconPanel}><FontAwesomeIcon icon="music"/></span>
                        <span className={s.iconPanel}><FontAwesomeIcon icon="image"/></span>
                        <span className={s.iconPanel}><FontAwesomeIcon icon="video"/></span>
                        <span className={s.iconPanel}><FontAwesomeIcon icon="camera"/></span>
                        <button className="button">Publish</button>
                    </div>
                </div>
            </form>
            )}
        </Form>
    )}

//const PostFormRedux = reduxForm({form: 'createPost'})(PostForm)

const CreatePost = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.messageText);
        formData.messageText = "";
    }
    return (
        <div className={`${s.profile_block} profile_block`}>
            <div className={s.create_post}>
                {props.profileOwner && <img className={s.ava} src={props.profileOwner.photos.small} alt="avatar"/>}
                <PostForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default CreatePost