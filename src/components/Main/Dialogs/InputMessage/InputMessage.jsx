import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/state';
import s from './inputMessage.module.css'

const InputMessage = (props) => {
    let newMessageElement = React.createRef();

    let newMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text))
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