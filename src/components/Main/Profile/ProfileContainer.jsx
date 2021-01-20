import React from 'react'
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUsersProfile} from "../../../redux/profile-reducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUsersProfile(response.data);
        })
    }
    render() {
        return <Profile {...this.props} />
    }
}
let mapStateToProps = (state) => ({
        profilePage: state.profilePage
})

    export default connect(mapStateToProps,{setUsersProfile})(ProfileContainer)