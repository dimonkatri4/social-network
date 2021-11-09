import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    changeIsLiked,
    getProfile,
    getStatus,
    savePhoto,
    setErrorInStatus,
    updateStatus
} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getMainPhotoRef} from "../../../redux/app-reducer";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.authId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        if (userId) {
            this.props.getProfile(userId);
            this.props.getStatus(userId)
        }
    }
    componentDidMount() {
        this.refreshProfile()
        //     profileAPI.getProfile(userId).then(data => {
        //     this.props.setUsersProfile(data);
        // })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
    }
}
let mapStateToProps = (state) => ({
        profilePage: state.profilePage,
        status: state.profilePage.status,
        authId: state.auth.userId,
        isAuth:state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps,{getProfile,getStatus,updateStatus, savePhoto, setErrorInStatus,changeIsLiked, getMainPhotoRef}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

/*
let withAuth = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(withAuth);

export default connect(mapStateToProps,{getProfile})(WithUrlDataContainerComponent)*/
