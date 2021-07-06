import React from 'react'
import {
    getIsFetching,
    getFriendsList
} from "../../../../redux/users-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestFriends} from "../../../../redux/users-reducer";
import Sidebar from "./Sidebar";
import Preloader from "../../../common/Preloader/Preloader";


class SidebarContainer extends React.Component {

    state = {
        userSearchName: null
    }

    componentDidMount() {
        this.props.requestFriends(5, 1, true)
    }

    searchUsers = (searchName) => {
        this.setState({userSearchName: searchName});
        this.props.requestFriends(5, 1, true, searchName);
    }

    render() {
        return <>
            <Sidebar users={this.props.users} searchUsers={this.searchUsers}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getFriendsList(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(
    connect(mapStateToProps, {requestFriends})
)(SidebarContainer)