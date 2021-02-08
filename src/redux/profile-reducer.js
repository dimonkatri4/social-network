import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USERS_STATUS = 'SET_USERS_STATUS'

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Hi, how are you?',
            likeCount: 10,
            userName: 'cat griffith',
            commentsCount: 5,
            viewsCount: 9,
            shareCount: 1,
            date: 'June,2 2018 19:20'
        },
        {
            id: 2,
            message: 'It\'s my first post',
            likeCount: 5,
            userName: 'cat griffith',
            commentsCount: 3,
            viewsCount: 7,
            shareCount: 2,
            date: 'June,2 2018 19:20'
        },
        {
            id: 3,
            message: 'Helo!',
            likeCount: 7,
            userName: 'cat griffith',
            commentsCount: 1,
            viewsCount: 21,
            shareCount: 0,
            date: 'June,2 2018 19:20'
        },
        {
            id: 4,
            message: 'Hi, how are you?',
            likeCount: 14,
            userName: 'cat griffith',
            commentsCount: 15,
            viewsCount: 20,
            shareCount: 3,
            date: 'June,2 2018 19:20'
        },
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
                userName: 'cat griffith',
                commentsCount: 0,
                viewsCount: 0,
                shareCount: 0,
                date: 'November, 20 2020 16:43'
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        case SET_USERS_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST});
export const updateNewPost= (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status})

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUsersProfile(data))
        })
    }
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(data=>{
        dispatch(setUsersStatus(data))
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data=>{
        if(data.resultCode === 0) {
            dispatch(setUsersStatus(status))
        }
    })
}

export default profileReducer;