import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.authId
            if (!this.props.isAuth) {
                debugger
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId)
        //     profileAPI.getProfile(userId).then(data => {
        //     this.props.setUsersProfile(data);
        // })
    }

    render() {
        return <Profile {...this.props} />
    }
}
let mapStateToProps = (state) => ({
        profilePage: state.profilePage,
        status: state.profilePage.status,
        authId: state.auth.userId,
        isAuth:state.auth.isAuth
});

export default compose(
    connect(mapStateToProps,{getProfile,getStatus,updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)

/*
let withAuth = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(withAuth);

export default connect(mapStateToProps,{getProfile})(WithUrlDataContainerComponent)*/
