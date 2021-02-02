import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=2
        }
        this.props.getProfile(userId)
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
        isAuth: state.auth.isAuth
});

let withAuth = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(withAuth);

export default connect(mapStateToProps,{getProfile})(WithUrlDataContainerComponent)