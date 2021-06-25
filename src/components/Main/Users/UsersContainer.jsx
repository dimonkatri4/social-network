import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, setFriends,
    toggleFollowing,
    unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import Preloader from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress, getFriends,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../../redux/users-selectors";


class UsersContainer extends React.Component {

    state = {
        userSearchName: null
    }

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage, this.props.friends)
    }

    componentWillMount() {
        this.setState({userSearchName: null})
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(this.props.pageSize, pageNumber, this.props.friends, this.state.userSearchName)
    }

    showFriends = (friends) => {
        this.props.setCurrentPage(1);
        this.props.setFriends(friends);
        this.props.requestUsers(this.props.pageSize, 1, friends);
    }

    searchUsers = (searchName) => {
        this.props.setCurrentPage(1);
        this.setState({userSearchName: searchName});
        this.props.requestUsers(this.props.pageSize, 1, this.props.friends, searchName)
    }

    clearForm = () => {
        this.setState({userSearchName: null})
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                toggleFollowing={this.props.toggleFollowing}
                showFriends={this.showFriends}
                friends={this.props.friends}
                searchUsers={this.searchUsers}
                clearForm={this.clearForm}
                userSearchName={this.state.userSearchName}
                scrollToMainPhoto={this.props.scrollToMainPhoto}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        //users: getUsersSuper(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        friends: getFriends(state)
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowing, requestUsers, setFriends})
)(UsersContainer)


