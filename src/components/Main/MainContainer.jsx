import React from 'react'
import {connect} from "react-redux";
import Main from "./Main";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
    }
}

const MainContainer = connect(mapStateToProps)(Main)

export default MainContainer

