import React from 'react'
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../../../redux/dilogs-reducer';
import InputMessage from "./InputMessage";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {dispatch(addMessageActionCreator())},
        updateNewMessage: (text) => {dispatch(updateNewMessageTextActionCreator(text))}
    }
}
const InputMessageContainer = connect(mapStateToProps,mapDispatchToProps)(InputMessage)

export default InputMessageContainer