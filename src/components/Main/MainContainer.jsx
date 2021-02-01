import React from 'react'
import {connect} from "react-redux";
import Main from "./Main";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        dialogsPage: state.dialogsPage,
        sidebarPage: state.sidebarPage,
        isAuth: state.auth.isAuth
    }
}

const MainContainer = connect(mapStateToProps)(Main)

export default MainContainer

