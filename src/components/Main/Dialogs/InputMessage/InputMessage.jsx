import React from 'react'
import s from './inputMessage.module.css'

const InputMessage = (props) => {

    let newMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessage(text);
    }

    
    return (
        <div className={s.input_text}>
            <textarea
                onChange={onMessageChange}
                value={props.newMessageText}
                placeholder="write message"
            />
            <button onClick={newMessage} className='button'>Send</button>
        </div>
    )
}

export default InputMessage