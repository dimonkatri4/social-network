import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


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

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

    export default connect(mapStateToProps,{getProfile})(WithUrlDataContainerComponent)