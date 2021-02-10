import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN_DATA = 'SET_LOGIN_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loginData: {
        userLogin: null,
        password: null,
        rememberMe: false,
        captcha: false
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN_DATA:
            return {
                ...state,
                loginData: {...action.loginData}

            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});
export const setLoginData = (userLogin, password, rememberMe,captcha) => ({type: SET_LOGIN_DATA,
    loginData: {userLogin, password, rememberMe,captcha}});


export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

export const logIn = (userLogin, password, rememberMe,captcha) => (dispatch) => {
    dispatch(setLoginData(userLogin, password, rememberMe,captcha))
    authAPI.login(userLogin, password, rememberMe,captcha).then(data => {
        if (data.resultCode===0){
            alert("Login succesfull")
        }
    })
}


export default authReducer;