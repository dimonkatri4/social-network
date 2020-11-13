import React from 'react'
import s from './inputMessage.module.css'

const InputMessage = (props) => {
    return (
        <div className={s.input_text}>
            <textarea name="" id="" cols="" rows=""></textarea>
            <div className={s.send}>
                <button className='button'>Send</button>
            </div>
        </div>
    )
}

export default InputMessage