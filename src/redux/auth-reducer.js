import {authAPI} from "../api/api";

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
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login,isAuth) =>
    ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const logIn = (userLogin, password, rememberMe=false) => (dispatch) => {
    authAPI.login(userLogin, password, rememberMe).then(data => {
        debugger
        if (data.resultCode===0){
            dispatch(setAuthUserData())
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode===0){
            dispatch(setAuthUserData(null,null,null,false))
        }
    })
}

export default authReducer;