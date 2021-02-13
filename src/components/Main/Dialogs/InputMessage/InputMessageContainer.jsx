import {addMessage, updateNewMessageTextActionCreator} from '../../../../redux/dilogs-reducer';
import InputMessageForm from "./InputMessage";
import {connect} from "react-redux";
import InputMessageFormRedux from "./InputMessage";


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (formData) => {
            dispatch(addMessage(formData.messageText))
        }
    }
}
const InputMessageContainer = connect(mapStateToProps,mapDispatchToProps)(InputMessageFormRedux)

export default InputMessageContainer