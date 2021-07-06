import {userAPI} from "../api/api";

const FOLLOW_SUCCESS = 'users/FOLLOW_SUCCESS';
const UNFOLLOW_SUCCESS = 'users/UNFOLLOW_SUCCESS';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'users/SET_TOTAL_COUNT_USERS'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'users/TOGGLE_FOLLOWING_IN_PROGRESS '
const SET_IS_FRIENDS_LIST = 'users/SET_IS_FRIENDS_LIST'
const SET_FRIENDS_LIST = 'users/SET_FRIENDS_LIST'



let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],                         //масив userId
    isFriendsList: true,
    friendsList:[]
}

// common function for follow and unfollow thunk creators
let followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowing(true, userId))
    const data = await apiMethod(userId);
    if (data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowing(false, userId))
}

//common function for change or update property in object
const updateObjectInArray = (items, itemId, objectProperty, newObjProps) => {
    return items.map(i => {
        if (i[objectProperty] === itemId) {
            return {...i, ...newObjProps}
        }
        return i
    })
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
        case SET_IS_FRIENDS_LIST:
            return {
                ...state, isFriendsList: action.isFriendsList
            }
        case SET_FRIENDS_LIST:
            return {
                ...state, friendsList: action.friendsList
            }
        default:
            return state
    }
}

//Action Creators
export const followSuccess = (userId) => ({type: FOLLOW_SUCCESS, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_SUCCESS, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountUsers = (count) => ({type: SET_TOTAL_COUNT_USERS, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})
export const setIsFriendsList = (isFriendsList) => ({type: SET_IS_FRIENDS_LIST, isFriendsList})
export const setFriendsList = (friendsList) => ({type: SET_FRIENDS_LIST, friendsList})

//Thunk Creators
export const requestUsers = (pageSize, page, friends, term) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUser(pageSize,page,friends,term);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalCountUsers(data.totalCount))
}

export const requestFriends = (pageSize, page, friends, term) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await userAPI.getUser(pageSize,page,friends,term);
    dispatch(toggleIsFetching(false));
    dispatch(setFriendsList(data.items));
}


export const unfollow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.deleteFollow, unfollowSuccess);
}

export const follow = (userId) => async (dispatch) => {
    followUnfollowFlow(dispatch, userId, userAPI.postFollow, followSuccess);
}

export default usersReducer;