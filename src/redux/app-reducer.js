import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';
const GET_PROFILE_DATA_REF = 'app/GET_PROFILE_DATA_REF';
const GET_MAIN_PHOTO_REF = 'app/GET_MAIN_PHOTO_REF';

let initialState = {
    initialized: false,
    profileDataRef: null,
    mainPhotoRef: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case GET_PROFILE_DATA_REF:
            return {
                ...state,
                profileDataRef: action.ref
            }
        case GET_MAIN_PHOTO_REF:
            return {
                ...state,
                mainPhotoRef: action.ref
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const getProfileDataRef = (ref) => ({type: GET_PROFILE_DATA_REF, ref});
export const getMainPhotoRef = (ref) => ({type: GET_MAIN_PHOTO_REF, ref});

export const initializeApp = () => async (dispatch) => {
    let promise = await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
}



export default appReducer;