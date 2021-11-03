import {authAPI, captchaAPI} from "../api/api";
import {FORM_ERROR} from 'final-form'
import {getOwnerProfile} from "./profile-reducer";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getCaptchaUrlSuccess = (captchaUrl) =>
    ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}});

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
        dispatch(getOwnerProfile(id))
    }
}

export const login = (userLogin, password, rememberMe, captcha) => async (dispatch) => {
    const data = await authAPI.login(userLogin, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData());
        dispatch(getCaptchaUrlSuccess(null))
    } else if (data.resultCode === 10) {
        dispatch(getCaptchaUrl());
        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Other Error";
        return {[FORM_ERROR]: errorMessage}
    } else {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Other Error";
        return {[FORM_ERROR]: errorMessage}
    }
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const data = await captchaAPI.getCaptchaUrl();
    const captchaUrl = data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;