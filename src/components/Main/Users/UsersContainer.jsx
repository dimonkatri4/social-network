import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, setIsFriendsList,
    toggleFollowing,
    unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import Preloader from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getIsFriendsList,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../../redux/users-selectors";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {userSearchName: null}
    }

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage, this.props.isFriendsList)
    }

    // componentWillMount() {
    //     this.setState({userSearchName: null})
    // }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(this.props.pageSize, pageNumber, this.props.isFriendsList, this.state.userSearchName)
    }

    showFriends = (friends) => {
        this.props.setCurrentPage(1);
        this.props.setIsFriendsList(friends);
        this.props.requestUsers(this.props.pageSize, 1, friends);
    }

    searchUsers = (searchName) => {
        this.props.setCurrentPage(1);
        this.setState({userSearchName: searchName});
        this.props.requestUsers(this.props.pageSize, 1, this.props.isFriendsList, searchName);
    }

    clearForm = () => {
        this.setState({userSearchName: null})
    }

    render() {
        return <Users
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
                isFriendsList={this.props.isFriendsList}
                searchUsers={this.searchUsers}
                clearForm={this.clearForm}
                userSearchName={this.state.userSearchName}
                scrollToMainPhoto={this.props.scrollToMainPhoto}
                isFetching={this.props.isFetching}
            />
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
        isFriendsList: getIsFriendsList(state)
    }
}


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowing, requestUsers, setIsFriendsList})
)(UsersContainer)


