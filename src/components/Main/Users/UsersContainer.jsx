import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCountUsers,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from '../../../images/Preloader.gif'

// класова контейнерна компонента в якій виконуємо ajax-запит
// і передає пропси в функціональну,чисту компоненту Users
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalCountUsers(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader} alt=""/> : null}
            <Users
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users = {this.props.users}
        />
        </>
    }
}

// контейнерна компонента яка будується за допомогою connect
// і передає пропси з кол-беками в класову компоненту UsersContainer
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {dispatch(followAC(userId))},
        unfollow: (userId) => {dispatch(unfollow(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageAC(page))},
        setTotalCountUsers: (count)=> {dispatch(setTotalCountUsersAC(count))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetchingAC(isFetching))}
    }
}*/


export default connect (mapStateToProps,{
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCountUsers,
    toggleIsFetching
})(UsersContainer);

