import initialState from './header-state';

export const RESET_INPUT = 'formReducer/RESET_INPUT';
const SET_USER_GEO_DATA = 'headerReducer/SET_USER_GEO_DATA';

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_GEO_DATA: 
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

export default headerReducer;


