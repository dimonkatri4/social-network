import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const SET_USERS_STATUS = 'profile/SET_USERS_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const UPDATE_PROFILE_INFO_SUCCESS = 'profile/UPDATE_PROFILE_INFO_SUCCESS';
const CHANGE_EDIT_MODE_PROFILE = 'profile/CHANGE_EDIT_MODE_PROFILE';
const SET_OWNER_PROFILE = 'profile/SET_OWNER_PROFILE';
const SET_ERROR_IN_STATUS = 'profile/SET_ERROR_IN_STATUS';
const CHANGE_IS_LIKED = 'profile/CHANGE_IS_LIKED';



let initialState = {
    posts: [
        {
            id: 0,
            message: 'Hi, how are you?',
            likeCount: 10,
            userName: 'cat griffith',
            commentsCount: 5,
            viewsCount: 9,
            shareCount: 1,
            date: 'June,2 2018 19:20',
            isLiked: false
        },
        {
            id: 1,
            message: 'It\'s my first post',
            likeCount: 5,
            userName: 'cat griffith',
            commentsCount: 3,
            viewsCount: 7,
            shareCount: 2,
            date: 'June,2 2018 19:20',
            isLiked: true
        },
        {
            id: 2,
            message: 'Helo!',
            likeCount: 7,
            userName: 'cat griffith',
            commentsCount: 1,
            viewsCount: 21,
            shareCount: 0,
            date: 'June,2 2018 19:20',
            isLiked: false
        },
        {
            id: 3,
            message: 'Hi, how are you?',
            likeCount: 14,
            userName: 'cat griffith',
            commentsCount: 15,
            viewsCount: 20,
            shareCount: 3,
            date: 'June,2 2018 19:20',
            isLiked: false
        },
    ],

    profile: null,
    status: '',
    photo: null,
    editModeProfile: false,
    profileOwner: null,
    error: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0,
                userName: 'cat griffith',
                commentsCount: 0,
                viewsCount: 0,
                shareCount: 0,
                date: 'November, 20 2020 16:43',
                isLiked: false
            };
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        case SET_OWNER_PROFILE:
            return {...state, profileOwner: action.profile}
        case SET_USERS_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.idPost)}
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        case UPDATE_PROFILE_INFO_SUCCESS:
            return {
                ...state, profile: {
                    ...state.profile, ...action.profile,
                    contacts: {...state.profile.contacts, ...action.profile.contacts}
                }
            }
        case CHANGE_EDIT_MODE_PROFILE:
            return {...state, editModeProfile: action.editValue}
        case SET_ERROR_IN_STATUS:
            return {...state, error: action.error}
        case CHANGE_IS_LIKED:
            return {...state,posts: state.posts.map(p => {
                if(p["id"] === action.id) {
                    if(p.isLiked) {
                        return {...p, isLiked:action.isLiked,likeCount:p.likeCount-1}
                    } else {
                        return {...p, isLiked:action.isLiked,likeCount:p.likeCount+1}
                    }
                }
                return p
                }) }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setOwnerProfile = (profile) => ({type: SET_OWNER_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});
export const deletePost = (idPost) => ({type: DELETE_POST, idPost});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const updateProfileInfoSuccess = (profile) => ({type: UPDATE_PROFILE_INFO_SUCCESS, profile});
export const changeEditModeProfile = (editValue) => ({type: CHANGE_EDIT_MODE_PROFILE, editValue});
export const setErrorInStatus = (error) => ({type: SET_ERROR_IN_STATUS, error});
export const changeIsLiked = (isLiked,id) => ({type: CHANGE_IS_LIKED, isLiked,id});


export const getProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId);
        //  dispatch(getOwnerProfile());
        dispatch(setUsersProfile(data));
    }
}

export const getOwnerProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getProfile(userId);
    dispatch(setOwnerProfile(data));
}


export const getStatus = (userId) => async (dispatch) => {
    const data = await profileAPI.getStatus(userId);
    dispatch(setUsersStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        const data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setUsersStatus(status));
            dispatch(setErrorInStatus(null))
        } else {
            let errorMessage = data.messages.length > 0 ? data.messages[0] : "Other Error";
            dispatch(setErrorInStatus(errorMessage))
        }
    } catch (error) {
        dispatch(setErrorInStatus(`Problem with server. Status Code: ${error.response.status}`))
    }
}
export const savePhoto = (photo) => async (dispatch) => {
    const data = await profileAPI.savePhoto(photo);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

export const updateProfileInfo = (profile) => async (dispatch) => {
    const data = await profileAPI.updateProfileInfo(profile);
    if (data.resultCode === 0) {
        dispatch(updateProfileInfoSuccess(profile));
        dispatch(changeEditModeProfile(false));
    } else {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Other Error";
        dispatch(stopSubmit('profileDataEdit', {_error: errorMessage}))
    }
}

export default profileReducer;