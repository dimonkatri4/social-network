import React from 'react'
import s from './inputMessage.module.css'
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {maxLength, required} from "../../../../utils/validators/validators";
import {Form, Field} from "react-final-form";

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
        <Form onSubmit={props.onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className={s.input_text}>
                        <Field
                            component={Textarea}
                            name={'messageText'}
                            placeholder="write message"
                            //validate={[required, maxLength30]}
                        />
                        <button className={`button ${s.submitButton}`}>Send</button>
                    </div>
                </form>
            )}
        </Form>
    )
}


const InputMessage = (props) => {
    const onSubmit = (formData) => {
        props.addMessage(formData.messageText);
        //formData.messageText = "";
    }
    return (
        <InputMessageForm onSubmit={onSubmit} />
    )
}


//const InputMessageFormRedux = reduxForm({form: 'inputMessage'})(InputMessageForm)

export default InputMessage