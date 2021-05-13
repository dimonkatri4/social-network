import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage,
    toggleFollowing,
    unfollow
} from "../../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import Preloader from "../../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../../redux/users-selectors";


// класова контейнерна компонента в якій виконуємо ajax-запит
// і передає пропси в функціональну,чисту компоненту Users
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage)
        // this.props.toggleIsFetching(true);
        // userAPI.getUser(this.props.pageSize, this.props.currentPage).then(data => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items);
        //     this.props.setTotalCountUsers(data.totalCount)
        // })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(this.props.pageSize, pageNumber)
        /*this.props.toggleIsFetching(true)
        userAPI.getUser(this.props.pageSize, pageNumber).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })*/
    }

    render() {
        console.log("USERS render")
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
            />
        </>
    }
}

// контейнерна компонента яка будується за допомогою connect
// і передає пропси з кол-беками в класову компоненту UsersContainer
/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        //users: getUsersSuper(state),
        users:getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(follow(userId))},
        unfollow: (userId) => {dispatch(unfollow(userId))},
        setUsers: (users) => {dispatch(setUsers(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPage(page))},
        setTotalCountUsers: (count)=> {dispatch(setTotalCountUsers(count))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetching(isFetching))},
        toggleFollowing: (isFetching, userId) => {dispatch(toggleFollowing(isFetching, userId))},
        getUsers: (pageSize,currentPage) => {dispatch(getUsers(pageSize,currentPage))}
    }
}*/

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowing, requestUsers})
)(UsersContainer)

/*export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowing, getUsers}
                            )(UsersContainer);*/

