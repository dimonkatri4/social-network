import React from 'react'
import s from './inputMessage.module.css'

const InputMessage = (props) => {
    let newMessageElement = React.createRef();

    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={s.input_text}>
            <textarea ref={newMessageElement} name="" id="" cols="" rows=""></textarea>
            <div className={s.send}>
                <button onClick={newMessage} className='button'>Send</button>
            </div>
        </div>
    )
}

export default InputMessage