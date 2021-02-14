import {addMessage} from '../../../../redux/dilogs-reducer';
import {connect} from "react-redux";
import InputMessageFormRedux from "./InputMessage";


let mapStateToProps = (state) => {
    return {
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