import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dilogs-reducer';
import InputMessage from "./InputMessage";
import StoreContent from "../../../../StoreContext";


const InputMessageContainer = (props) => {
    return <StoreContent.Consumer>
        {(store) => {
            let state = store.getState();
            let newMessage = () => {
                store.dispatch(addMessageActionCreator())
            }
            let onMessageChange = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text))
            }
            return <InputMessage addMessage={newMessage}
                                 updateNewMessage={onMessageChange}
                                 newMessageText={state.dialogsPage.newMessageText}
            />
        }
        }
    </StoreContent.Consumer>
}

export default InputMessageContainer