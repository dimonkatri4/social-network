import {addMessage} from '../../../../redux/dilogs-reducer';
import {connect} from "react-redux";
import InputMessage from "./InputMessage";


const InputMessageContainer = connect(null, {addMessage})(InputMessage)

export default InputMessageContainer