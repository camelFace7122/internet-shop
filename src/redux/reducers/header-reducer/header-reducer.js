import initialState from './header-state';
import ReactDOM from 'react-dom';

export const RESET_INPUT = 'formReducer/RESET_INPUT';
const SET_USER_GEO_DATA = 'headerReducer/SET_USER_GEO_DATA';
const CONFIRM_USER_REGION = 'headerReducer/CONFIRM_USER_REGION';

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_GEO_DATA:
        case CONFIRM_USER_REGION: 
            return {
                ...state,
                ...action.payload,
            }
        default: 
            return state;
    }
}

export const setUserGeoData = (geoData) => {
    return {
        type: SET_USER_GEO_DATA,
        payload: {userRegion: geoData.location},
    }
}

export const resetInput = (field) => {
    return {
        type: RESET_INPUT,
        field,
    }
}

export const confirmUserRegion = () => {
    return {
        type: CONFIRM_USER_REGION,
        payload: {regionIsConfirmed: true},
    }
}

export default headerReducer;


