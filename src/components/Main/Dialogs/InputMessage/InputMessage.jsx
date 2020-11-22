import React from 'react'
import s from './inputMessage.module.css'

const InputMessage = (props) => {
    let newMessageElement = React.createRef();

    let newMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    }

    
    return (
        <div className={s.input_text}>
            <textarea ref={newMessageElement}
                onChange={onMessageChange}
                value={props.newMessageText}
                placeholder="write message"
            />
            <button onClick={newMessage} className='button'>Send</button>
        </div>
    )
}

export default InputMessage