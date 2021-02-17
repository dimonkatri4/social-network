import React from 'react'
import s from './inputMessage.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {maxLength, required} from "../../../../utils/validators/validators";

const maxLength30 = maxLength(30)

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
                component={Textarea}
                name={'messageText'}
                placeholder="write message"
                validate={[required,maxLength30]}
            />
            <button className='button'>Send</button>
        </div>
        </form>
    )
}

const InputMessageFormRedux = reduxForm({form:'inputMessage'})(InputMessageForm)

export default InputMessageFormRedux