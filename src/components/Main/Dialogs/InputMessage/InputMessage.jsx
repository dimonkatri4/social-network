import React from 'react'
import s from './inputMessage.module.css'
import {Field, reduxForm} from "redux-form";

const InputMessageForm = (props) => {

    // let newMessage = () => {
    //     props.addMessage();
    // }
    // let onMessageChange = (event) => {
    //     let text = event.target.value;
    //     props.updateNewMessage(text);
    // }
    return (
        <form onSubmit={props.handleSubmit}>
        <div className={s.input_text}>
            <Field
                component={'textarea'}
                name={'messageText'}
                value={props.newMessageText}
                placeholder="write message"
            />
            <button className='button'>Send</button>
        </div>
        </form>
    )
}

const InputMessageFormRedux = reduxForm({form:'message'})(InputMessageForm)

export default InputMessageFormRedux