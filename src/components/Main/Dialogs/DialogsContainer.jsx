import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default connect(mapStateToProps)(Dialogs)