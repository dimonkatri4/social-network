import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../../redux/dilogs-reducer';
import InputMessage from "./InputMessage";


const InputMessageContainer = (props) => {

    let state = props.store.getState();

    let newMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    
    return <InputMessage addMessage={newMessage}
                         updateNewMessage={onMessageChange}
                         newMessageText={state.dialogsPage.newMessageText}
    />
}

export default InputMessageContainer