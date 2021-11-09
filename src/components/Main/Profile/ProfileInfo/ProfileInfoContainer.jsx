import React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {changeEditModeProfile, updateProfileInfo} from "../../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import {getProfileDataRef} from "../../../../redux/app-reducer";



let mapStateToProps = (state) => ({
    profile:state.profilePage.profile,
    editModeProfile: state.profilePage.editModeProfile
})

export default compose(
    withRouter,
    connect(mapStateToProps,{updateProfileInfo,changeEditModeProfile,getProfileDataRef})
)(ProfileInfo)