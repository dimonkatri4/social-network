import {userAPI} from "../api/api";

const FOLLOW_SUCCESS = 'users/FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'users/UNFOLLOW_SUCCESS';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'users/SET_TOTAL_COUNT_USERS'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_FOLLOWING_IN_PROGRESS '


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],                         //масив userId
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW_SUCCESS:
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
export const followSuccess = (userId) => ({type: FOLLOW_SUCCESS, userId: userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_SUCCESS, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

//Thunk Creators
export const requestUsers = (pageSize, page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUser(pageSize, page);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCountUsers(data.totalCount))
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleFollowing(true, userId))
    const data = await userAPI.deleteFollow(userId);
    if (data.resultCode == 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowing(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleFollowing(true, userId))
    const data = await userAPI.postFollow(userId);
    if (data.resultCode == 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowing(false, userId))
}

export default usersReducer;