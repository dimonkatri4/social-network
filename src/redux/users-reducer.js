import {userAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS '


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []                          //масив userId
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_TOTAL_COUNT_USERS:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :                    //якщо isFetching==true то записуємо userId в кінець масива
                    state.followingInProgress.filter(id => id !== action.userId)    // якщо isFetching==false то видаляємо userId за допомогою метода filter
            }
        default:
            return state
    }
}

//Action Creators
export const followSuccess = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

//Thunk Creators
export const getUsers = (pageSize,currentPage) => {
   return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI.getUser(pageSize, currentPage).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCountUsers(data.totalCount))
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId))
        userAPI.deleteFollow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId))
        userAPI.postFollow(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}

export default usersReducer;