import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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

export const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (userLogin, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(userLogin, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let errorMessage = data.messages.length > 0 ? data.messages[0] : "Other Error"
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;